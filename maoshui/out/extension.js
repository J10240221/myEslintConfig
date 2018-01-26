"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const { Position, Range } = vscode;
const ELM_MODE = {
    language: "javascript",
    scheme: "file"
};
function findElmFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const css = yield vscode.workspace.findFiles(`**/*.css`, "**/node_modules/**");
        const less = yield vscode.workspace.findFiles(`**/*.less`, "**/node_modules/**");
        return [...css, ...less];
    });
}
exports.findElmFiles = findElmFiles;
class ElmGoToProvider {
    provideDefinition(document, position, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const elm_files = yield findElmFiles();
            const selected_text = document.getText(document.getWordRangeAtPosition(position, /((').*('))|((").*("))/g));
            const path_ = path.join(document.fileName, "../", selected_text.replace(/'|"/g, ""));
            const exists = fs.existsSync(path_);
            if (!path_) {
                return null;
            }
            else {
                for (let i of elm_files) {
                    if (process.env.OS.indexOf("indows") == -1) {
                        if (i.path === path_) {
                            return new vscode.Location(i, new Position(0, 0));
                        }
                    }
                    else {
                        if (i.path === "/" + path_.replace(/\\/g, "/")) {
                            return new vscode.Location(i, new Position(0, 0));
                        }
                    }
                }
                return null;
            }
        });
    }
}
exports.ElmGoToProvider = ElmGoToProvider;
function activate(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.subscriptions.push(vscode.languages.registerDefinitionProvider(ELM_MODE, new ElmGoToProvider()));
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map