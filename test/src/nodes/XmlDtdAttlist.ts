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

import {assert} from "chai";
import XmlDtdAttlist from "../../../lib/nodes/XmlDtdAttlist";

describe("XmlDtdAttlist", () => {
    describe("#toString", () => {
        it("normal character data",
           () => {
               assert.strictEqual(
                   new XmlDtdAttlist(undefined, true, {
                       charData: "abc"
                   }).toString(),
                   "<!ATTLIST abc>");
           });

        it("character data with characters not allowed in XML", () => {
            assert.throws(
                () => new XmlDtdAttlist(undefined, true, {
                    charData: "abc" + String.fromCharCode(0x0001) + "def"
                }));
            assert.doesNotThrow(
                () => new XmlDtdAttlist(undefined, false, {
                    charData: "abc" + String.fromCharCode(0x0001) + "def"
                }));
        });
    });

    it("#up", () => {
        assert.strictEqual(
            new XmlDtdAttlist(undefined, false, {
                charData: "a"
            }).up(),
            undefined);
    });
});
