//Cách 1: import { in_tb as a, log as b} from "./2in_tb.mjs";
//Cách 2:
import * as a from "./2in_tb.mjs";
import th1 from './2expedition.mjs';

a.in_tb('thông báo 1');
a.log('thông báo 2', new Date());

th1.thong_bao();