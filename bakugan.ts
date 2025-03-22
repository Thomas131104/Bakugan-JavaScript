/**
 * Định nghĩa khoảng giá trị tối đa và tối thiểu.
 * @param max - Giá trị lớn nhất (mặc định là 100).
 * @param min - Giá trị nhỏ nhất (mặc định là 0).
 * @returns Object chứa max và min.
 * @throws Lỗi nếu min lớn hơn max.
 */
export function LimitRange(max: number = 100, min: number = 0) {
    if (max <= min) {
        throw new Error("Giá trị min không được lớn hơn max.");
    }
    return { max, min };
}



/**
 * Kiểm tra xem một giá trị có nằm trong khoảng cho phép hay không.
 * @param value - Giá trị cần kiểm tra.
 * @param range - Object chứa max và min.
 * @returns `true` nếu value nằm trong khoảng [min, max], ngược lại là `false`.
 */
function isValueInRange(value: number, range: { max: number; min: number }): boolean {
    return value >= range.min && value <= range.max;
}



/**
 * Enum đại diện cho các loại Bakugan.
 * @enum {number}
 */
export enum BakuganType {
    RED,    // Loại đỏ
    GREEN,  // Loại xanh lá
    BLUE,   // Loại xanh dương
    DARK,   // Loại bóng tối
    LIGHT   // Loại ánh sáng
}



/**
 * Đại diện cho một Bakugan
 * @class
 */
export class Bakugan 
{
    /**
     * Ngưỡng chung cho tất cả Bakugan
     */
    private static range = LimitRange();

    /**
     * Tên của Bakugan
     */
    private name: string;

    /**
     * Loại của Bakugan (Dựa trên enum BakuganType)
     */
    private type: BakuganType;
    
    /**
     * Chỉ số tấn công (attack)
     */
    private attack: number;

    /**
     * Chỉ số phòng thủ (defense)
     */
    private defense: number;

    /**
     * Chỉ số tốc độ (speed)
     */
    private speed: number;
    
    /**
     * Tổng chỉ số
     */
    private point: number;



    /**
     * Thiết lập ngưỡng tối thiểu và tối đa cho tất cả Bakugan.
     * @param max - Giá trị lớn nhất.
     * @param min - Giá trị nhỏ nhất.
     */
    static setRange(max: number, min: number): void 
    {
        this.range = LimitRange(max, min);
    }



    /**
     * Tạo một đối tượng Bakugan mới.
     * @param {string} name - Tên của Bakugan.
     * @param {BakuganType} type - Loại của Bakugan (giá trị từ enum BakuganType).
     * @param {number} attack - Chỉ số tấn công.
     * @param {number} defense - Chỉ số phòng thủ.
     * @param {number} speed - Chỉ số tốc độ.
     * @throws Lỗi nếu attack, defense hoặc speed không nằm trong khoảng cho phép.
     */
    constructor(name: string, type: BakuganType, attack: number, defense: number, speed: number) 
    {
        const range = Bakugan.range;

        if (!isValueInRange(attack, range)) 
        {
            throw new Error(`Giá trị tấn công (${attack}) phải nằm trong khoảng ${range.min} - ${range.max}.`);
        }

        if (!isValueInRange(defense, range)) 
        {
            throw new Error(`Giá trị phòng thủ (${defense}) phải nằm trong khoảng ${range.min} - ${range.max}.`);
        }

        if (!isValueInRange(speed, range)) 
        {
            throw new Error(`Giá trị tốc độ (${speed}) phải nằm trong khoảng ${range.min} - ${range.max}.`);
        }

        this.name = name;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.point = this.attack + this.defense + this.speed;
    }



    /**
     * Lấy thuộc tính của một Bakugan
     * @returns {BakuganType} - Enum loại của Bakugan
     */
    getType(): BakuganType {
        return this.type;
    }



    /**
     * Lấy tổng chỉ số của Bakugan
     * @returns {number} - chỉ số của Bakugan
     */
    getPoint(): number
    {
        return this.point;
    }



    /**
     * Chuyển đổi đối tượng Bakugan thành một object thông thường.
     * @returns {Object} - Một object biểu diễn Bakugan.
     */
    toObject(): Object 
    {
        return {
            name: this.name,
            type: BakuganType[this.type],
            attack: this.attack,
            defense: this.defense,
            speed: this.speed,
            point: this.point
        };
    }



    /**
     * Chuyển đổi đối tượng Bakugan thành chuỗi JSON.
     * @returns {string} - Chuỗi JSON biểu diễn Bakugan.
     */
    toJSON(): string 
    {
        return JSON.stringify(this.toObject());
    }
}



/**
 * Kiểm tra tương quan loại Bakugan
 * @param bakugan1 : Bakugan đầu tiên
 * @param bakugan2 : Bakugan thứ hai
 * @returns :
 * - -2: Bị khắc chế gấp đôi
 * - -1: Bị khắc chế
 * - 0: Không ảnh hưởng
 * - 1: Khắc chế
 * - 2: Khắc chế gấp đôi
 */
function RelationBakuganType(bakugan1: Bakugan, bakugan2: Bakugan): number {
    const bakuganType1 = bakugan1.getType();
    const bakuganType2 = bakugan2.getType();

    if ((bakuganType1 === BakuganType.BLUE && bakuganType2 === BakuganType.GREEN) ||
        (bakuganType1 === BakuganType.GREEN && bakuganType2 === BakuganType.RED) ||
        (bakuganType1 === BakuganType.RED && bakuganType2 === BakuganType.BLUE)) {
        return -1;
    }

    if ((bakuganType1 === BakuganType.GREEN && bakuganType2 === BakuganType.BLUE) ||
        (bakuganType1 === BakuganType.RED && bakuganType2 === BakuganType.GREEN) ||
        (bakuganType1 === BakuganType.BLUE && bakuganType2 === BakuganType.RED)) {
        return 1;
    }

    if ([BakuganType.LIGHT, BakuganType.DARK].includes(bakuganType1) &&
        ![BakuganType.LIGHT, BakuganType.DARK].includes(bakuganType2)) {
        return 2;
    }

    if (![BakuganType.LIGHT, BakuganType.DARK].includes(bakuganType1) &&
        [BakuganType.LIGHT, BakuganType.DARK].includes(bakuganType2)) {
        return -2;
    }

    if (bakuganType1 === BakuganType.LIGHT && bakuganType2 === BakuganType.DARK) {
        return 1;
    }

    if (bakuganType1 === BakuganType.DARK && bakuganType2 === BakuganType.LIGHT) {
        return -1;
    }

    return 0;
}



/**
 * Hàm so sánh 2 giá trị
 * @param obj1 - Đối tượng đầu tiên
 * @param obj2 - Đối tượng thứ hai
 * @returns :
 * - -1: Bé hơn
 * - 0: Bằng
 * - 1: Lớn hơn
 */
function comparePoint(obj1: number, obj2: number): number {
    return obj1 < obj2 ? -1 : obj1 > obj2 ? 1 : 0;
}



/**
 * Khi 2 Bakugan giao chiến
 * @param bakugan1 : Bakugan đầu tiên
 * @param bakugan2 : Bakugan thứ hai
 * @returns :
 * - -1 : Thua
 * - 0: Hòa 
 * - 1: Thắng
 * @throws Trường hợp không thể so sánh được
 */
export function BakuganBattle(bakugan1: Bakugan, bakugan2: Bakugan): number {
    const relation = RelationBakuganType(bakugan1, bakugan2);

    switch (relation) {
        case -2:
            return comparePoint(bakugan1.getPoint() * 0.8, bakugan2.getPoint() * 1.2);
        case -1:
            return comparePoint(bakugan1.getPoint() * 0.9, bakugan2.getPoint() * 1.1);
        case 0:
            return comparePoint(bakugan1.getPoint(), bakugan2.getPoint());
        case 1:
            return comparePoint(bakugan1.getPoint() * 1.1, bakugan2.getPoint() * 0.9);
        case 2:
            return comparePoint(bakugan1.getPoint() * 1.2, bakugan2.getPoint() * 0.8);
        default:
            throw new Error("Không xác định kết quả chiến đấu.");
    }
}