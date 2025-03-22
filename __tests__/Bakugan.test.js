import { LimitRange, Bakugan, BakuganType, BakuganBattle } from "../dist/bakugan.js";


describe('Bakugan Tests', () => {
  // Test LimitRange
  it('should create a valid range with default values', () => {
    const range = LimitRange();
    expect(range).toEqual({ max: 100, min: 0 });
  });


  it('should throw an error if min is greater than max', () => {
    expect(() => LimitRange(50, 100)).toThrow('Giá trị min không được lớn hơn max.');
  });


  // Test Bakugan creation
  it('should create a valid Bakugan', () => {
    const bakugan = new Bakugan('Dragonoid', BakuganType.RED, 50, 40, 30);
    expect(bakugan.toObject()).toEqual({
      name: 'Dragonoid',
      type: 'RED',
      attack: 50,
      defense: 40,
      speed: 30,
      point: 120,
    });
  });


  it('should throw an error if attack value is out of range', () => {
    Bakugan.setRange(100, 0); // Reset range
    expect(() => new Bakugan('InvalidBakugan', BakuganType.RED, 150, 40, 30)).toThrow(
      'Giá trị tấn công (150) phải nằm trong khoảng 0 - 100.'
    );
  });


  // Test BakuganBattle
  it('should return 1 when the first Bakugan wins', () => {
    const bakugan1 = new Bakugan('Dragonoid', BakuganType.RED, 60, 50, 40);
    const bakugan2 = new Bakugan('Hydranoid', BakuganType.BLUE, 50, 40, 30);
    const result = BakuganBattle(bakugan1, bakugan2);
    expect(result).toBe(1);
  });


  it('should return -1 when the second Bakugan wins', () => {
    const bakugan1 = new Bakugan('Dragonoid', BakuganType.RED, 40, 30, 20);
    const bakugan2 = new Bakugan('Hydranoid', BakuganType.BLUE, 60, 50, 40);
    const result = BakuganBattle(bakugan1, bakugan2);
    expect(result).toBe(-1);
  });

  
  it('should handle special relation cases', () => {
    const bakugan1 = new Bakugan('Luminoid', BakuganType.LIGHT, 60, 50, 40);
    const bakugan2 = new Bakugan('Darkus', BakuganType.DARK, 50, 40, 30);
    const result = BakuganBattle(bakugan1, bakugan2);
    expect(result).toBe(1);
  });
});
