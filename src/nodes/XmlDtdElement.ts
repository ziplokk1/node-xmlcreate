/**
 * Copyright (C) 2016-2018 Michael Kourlas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {validateChar} from "../validate";

/**
 * The options used to create a new element declaration.
 */
export interface IXmlDtdElementOptions {
    /**
     * The text of the declaration.
     */
    charData: string;
}

/**
 * Represents an element declaration in a document type definition.
 *
 * An element declaration is structured as follows, where `{text}` is the
 * text of the declaration:
 *
 * ```xml
 * <!ELEMENT {text}>
 * ```
 */
export default class XmlDtdElement<Parent> {
    private readonly _parent: Parent;
    private readonly _charData: string;

    constructor(parent: Parent, validation: boolean,
                options: IXmlDtdElementOptions)
    {
        if (validation && !validateChar(options.charData)) {
            throw new Error("Element declaration should not contain"
                            + " characters not allowed in XML");
        }
        this._charData = options.charData;
        this._parent = parent;
    }

    /**
     * Returns an XML string representation of this element declaration.
     */
    public toString(): string {
        return "<!ELEMENT " + this._charData + ">";
    }

    /**
     * Returns the parent of this element declaration.
     */
    public up(): Parent {
        return this._parent;
    }
}
