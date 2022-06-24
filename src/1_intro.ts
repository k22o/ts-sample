// interfaceやclassでの、型定義

interface User {
    name: string;
    id: number;
}

class Profession {
    name: string;
    prof: string;

    constructor(name: string, prof: string) {
        this.name = name;
        this.prof = prof;
    }
}

const user: User = {
    name: "Tom",
    id: 1
};

const prof = new Profession("Mary", "scientist");

console.log(user);
console.log(prof);

/*************************************************** */
// Union機能 -> enum的な
// 予め、変数を定め、それに外れる場合にはコンパイルエラーを出す

type season = "spring" | "summer" | "autumn" | "winter";
const se: season = "spring";
//const se: season = "springg"; # エラーになる
console.log(se);

/*************************************************** */
// ジェネリクス
// 予め、型を指定しておくことで、違う型のデータが入った際には、コンパイルエラー
type StringArr = Array<string>;
const arr: StringArr = ["a", "b", "c"];
console.log(arr);
