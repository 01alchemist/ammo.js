import * as fs from "fs";
import { parseIDL } from "./parser";
import { printAmmoAmbient, printAmmoModule, convertIDL } from "./converter";

const ammoIDL = parseIDL("../ammo.idl");
const ammoTS = convertIDL(ammoIDL);

if (!fs.existsSync("../builds/ambient")) {
  fs.mkdirSync("../builds/ambient");
}
fs.writeFileSync("../builds/ambient/ammo.d.ts", printAmmoAmbient(ammoTS));
fs.writeFileSync("../builds/ammo.d.ts", printAmmoModule(ammoTS));
