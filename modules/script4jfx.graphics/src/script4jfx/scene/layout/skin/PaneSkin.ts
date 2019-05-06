/*
 * Copyright (c) 2018-2019 Pavel Kastornyy. All rights reserved.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 */

import { AbstractHTMLSkin } from './../../../html/AbstractHTMLSkin';
import { Pane } from './../../layout/Pane';
import 'jquery';

export class PaneSkin extends AbstractHTMLSkin<Pane> {
    
    public constructor(node: Pane, element: HTMLElement) {
        super(node, element);
    }
    
    public getDefaultCssClass(): string {
        return "fx-pane";
    }
    
    protected createDefaultElement(): HTMLElement {
        return $('<div/>')[0];
    }
}

