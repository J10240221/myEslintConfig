"use strict";

import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

const { Position, Range } = vscode;
const ELM_MODE: vscode.DocumentFilter = {
   language: "javascript",
   scheme: "file"
};

export async function findElmFiles(): Promise<vscode.Uri[]> {
   const css = await vscode.workspace.findFiles(
      `**/*.css`,
      "**/node_modules/**"
   );
   const less = await vscode.workspace.findFiles(
      `**/*.less`,
      "**/node_modules/**"
   );
   return [...css, ...less];
}

interface TypeDefinition {
   name: string;
   position: vscode.Position;
   file_uri: vscode.Uri;
}

export class ElmGoToProvider implements vscode.DefinitionProvider {
   public async provideDefinition(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken
   ): Promise<vscode.Location> {
      const elm_files = await findElmFiles();
      const selected_text = document.getText(
         document.getWordRangeAtPosition(position, /((').*('))|((").*("))/g)
      );
      const path_ = path.join(
         document.fileName,
         "../",
         selected_text.replace(/'|"/g, "")
      );
      const exists = fs.existsSync(path_);
      if (!path_) {
         return null;
      } else {
         for (let i of elm_files) {
            if (process.env.OS.indexOf("indows") == -1) {
               if (i.path === path_) {
                  return new vscode.Location(i, new Position(0, 0));
               }
            } else {
               if (i.path === "/" + path_.replace(/\\/g, "/")) {
                  return new vscode.Location(i, new Position(0, 0));
               }
            }
         }
         return null;
      }
   }
}

export async function activate(ctx: vscode.ExtensionContext) {
   ctx.subscriptions.push(
      vscode.languages.registerDefinitionProvider(
         ELM_MODE,
         new ElmGoToProvider()
      )
   );
}
