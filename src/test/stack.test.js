class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    }

    get peek() {
        if (this.top == -1) {
            return null;
        }
        return this.items[this.top];
    }

    pop() {
        if (this.top > -1) {
            this.items[this.top] = null;
            this.top -= 1;
        }
    }
}



describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
    it('can push to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');
        expect(stack.peek != '🥙').toBeTruthy();
    });
    it('can pop off', () => {
        stack.pop();
        expect(stack.top).toBe(-1);
        // expect(stack.peek).toBe(100);

    });
})
