import { Message } from "./modules/message";
import { MathPlus } from "./modules/math";
import { MathMinus } from "./modules/math";
import { MathDivision } from "./modules/math";
import { MathMultiplication } from "./modules/math";
import { GetAverage } from "./modules/average";
Message()
MathPlus(4, 2);
MathMinus(4, 2);
MathDivision(4, 2);
MathMultiplication(4, 2);
console.log(GetAverage([10, 20, 30, 40, 50]));
