import { Bakugan, BakuganType } from "./dist/bakugan.js";

Bakugan.setRange(100, 10);

const dragonoid = new Bakugan("Dragonoid", BakuganType.RED, 80, 60, 70);
const pegatrix = new Bakugan("Pegatrix", BakuganType.BLUE, 60, 50, 60);
const trox = new Bakugan("Trox", BakuganType.GREEN, 80, 80, 50);
const xeneos = new Bakugan("Xeneos", BakuganType.RED, 80, 60, 60);
const gorila = new Bakugan("Gorila", BakuganType.BLUE, 75, 50, 60);
const cyber_dragon = new Bakugan("Cyber Dragon", BakuganType.RED, 90, 90, 90);
const weburn = new Bakugan("Weburn", BakuganType.DARK, 65, 55, 90);
const atuline = new Bakugan("Atuline", BakuganType.DARK, 60, 60, 90);
const houcorn = new Bakugan("Houcorn", BakuganType.DARK, 90, 50, 60);
const lupithion = new Bakugan("Lupithion", BakuganType.GREEN, 70, 70, 85);

const bakugans = [dragonoid, pegatrix, trox, xeneos, gorila, weburn, atuline, houcorn, lupithion, cyber_dragon]

console.table(bakugans.map(b => b.toObject()));