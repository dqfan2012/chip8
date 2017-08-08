'use strict';

/*
 * Author: Samuel Stidham
 * Project: Chip-8 Emulator
 * 
 * I used the following websites when building this emulator (used them for reference):
 *  - http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
 *  - https://en.wikipedia.org/wiki/CHIP-8
 *  - http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
 *  - http://www.multigesture.net/wp-content/uploads/mirror/goldroad/chip8_instruction_set.shtml
 */

class Chip8 {
    constructor() {
        // Configure the Display - The Chip-8 display area is a total of 2048 pixels (or 64 pixels wide by 32 pixels high). Each
        // pixel of the display will be controlled by using an array.
        this.screenHeight = 32;
        this.screenWidth = 64;
        this.display = new Array(this.screenWidth * this.screenHeight);

        /* ##################
         * ### MEMORY MAP ###
         * ##################
         * 0x000 - 0x1FF -> CHIP-8 Interpreter (Contains font set)
         * 0X050 - 0x0A0 -> Used for the built in 4x5 poxel font set (0 - F)
         * 0x200 - 0xFFF -> Program ROM and work RAM
         */

        // Configure the Memory - The length (or size) of an ArrayBuffer is measured in bytes. Chip-8 uses up to 4K bytes of memory.
        // Convert the 4K bytes into an unsigned 8-bit integer array
        const mem = new ArrayBuffer(0x4096);
        this.memory = new Uint8Array(mem);

        // The Chip-8 has 16 general purpose registers. The last is used for "carry flag"
        this.V = new Array(16);
        // The Chip-8 has an index register
        this.I = null;
        // The Chip-8 has a program counter (pc) that starts at memory location 0x200
        this.PC = 0x200;

        // The system has 16 levels of stack. The stack is used to remember the current location of the program counter before
        // jumping to another location or executing a subroutine. The stack pointer (sp) keeps track of which level of stack is being
        // used
        this.stack = new Array(16);
        this.sp = null;

        // Chip-8 has two timers. They both count down at 60 hertz until they reach 0. The delay timer is used for timing events of games.
        // It's value can be set and read. The sound timer is used for sound effects. When it's value is nonzero, a beeping sound is made.
        this.delayTimer = null;        
        this.soundTimer = null;


        this.keys = {};
    }
}

module.exports = Chip8;