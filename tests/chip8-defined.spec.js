'use strict';

import Chip8 from '../src/classes/Chip8.js';


describe('The Chip-8 VM ', () => {
    var MyChip8;

    beforeAll(() => {
        MyChip8 = new Chip8();
    });

    it('should have a screen width of 64 pixels', () => {
        expect(MyChip8.screenWidth).toBe(64);
    });

    it('should have a screen height of 32 pixels', () => {
        expect(MyChip8.screenHeight).toBe(32);
    });

    it('should have a display consisting of 2048 total pixels', () => {
        expect(MyChip8.display.length).toBe(2048);
    });

    it('should have 4k bytes of memory', () => {
        expect(MyChip8.memory.length).toBe(4096);
    });

    it('should have 16 general purpose registers', () => {
        expect(MyChip8.V.length).toBe(16);
    });

    it('should have an index register (I)', () => {
        expect(MyChip8.I).toBe(0x0);
    });

    it('should have a program counter (PC) starting at memory location 0x200', () => {
        expect(MyChip8.PC).toBe(0x200);
    });

    it('should track 16 levels of stack', () => {
        expect(MyChip8.stack.length).toBe(16);
    });

    it('should have a stack pointer (sp)', () => {
        expect(MyChip8.sp).toBe(0x0);
    });

    it('should have a delay timer', () => {
        expect(MyChip8.delayTimer).toBe(0x0);
    });

    it('should have a sound timer', () => {
        expect(MyChip8.soundTimer).toBe(0x0);
    });
});