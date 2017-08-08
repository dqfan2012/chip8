"use strict";

var MyChip8 = require(__dirname + "/../src/classes/Chip8").default;

describe('The Chip-8 VM ', () => {
    var Chip8;

    beforeAll(() => {
        Chip8 = new MyChip8();
    });

    it('should have a screen width of 64 pixels', () => {
        expect(Chip8.screenWidth).toBe(64);
    });

    it('should have a screen height of 32 pixels', () => {
        expect(Chip8.screenHeight).toBe(32);
    });

    it('should have a display consisting of 2048 total pixels', () => {
        expect(Chip8.display.length).toBe(2048);
    });

    it('should have 4k bytes of memory', () => {
        expect(Chip8.memory.length).toBe(4096);
    });

    it('should have 16 general purpose registers', () => {
        expect(Chip8.V.length).toBe(16);
    });

    it('should have an index register (I)', () => {
        expect(Chip8.I).toBeNull();
    });

    it('should have a program counter (PC) starting at memory location 0x200', () => {
        expect(Chip8.PC).toBe(0x200);
    });

    it('should track 16 levels of stack', () => {
        expect(Chip8.stack.length).toBe(16);
    });

    it('should have a stack pointer (sp)', () => {
        expect(Chip8.sp).toBeNull();
    });

    it('should have a delay timer', () => {
        expect(Chip8.delayTimer).toBeNull();
    });

    it('should have a sound timer', () => {
        expect(Chip8.soundTimer).toBeNull();
    });
});