'use strict';
import { HoverProvider, TextDocument, Position, CancellationToken, Hover } from 'vscode';
export class hoverRegister implements HoverProvider {
    provideHover(document: TextDocument, position: Position): Thenable<Hover> {
        return;
    }
}