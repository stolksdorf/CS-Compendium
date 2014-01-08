import java.util.Arrays;

class Stack<Type> {
	public int size = 0;
	private Object items[];
	private static final int DEFAULT_CAPACITY = 10;

	public Stack(){
		items = new Object[DEFAULT_CAPACITY];
	}
	private void resize(){
		int newSize = items.length * 2;
		items = Arrays.copyOf(items, newSize);
	}
	public void push(Type item){
		if(size == items.length){
			resize();
		}
		items[size++] = item;
	}
	public Type pop() {
		Type item = (Type) items[--size];
		items[size] = null;
		return item;
	}
	public Boolean isEmpty(){
		return size == 0;
	}



	/* TESTS */
	public static void main(String[] args) {
		Stack s = new Stack<Integer>();

		s.push(4);
		s.push(5);

		assert !s.isEmpty();
		assert s.pop() == 5;
		assert s.pop() == 4;
		assert s.isEmpty();
	}
}
