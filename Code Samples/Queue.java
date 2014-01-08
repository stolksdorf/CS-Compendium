import java.util.Arrays;

class Queue<Type> {
	public int size = 0;
	private Object items[];
	private static final int DEFAULT_CAPACITY = 10;

	public Queue(){
		items = new Object[DEFAULT_CAPACITY];
	}
	private void resize(){
		int newSize = items.length * 2;
		items = Arrays.copyOf(items, newSize);
	}
	public void enqueue(Type item){
		if(size == items.length){
			resize();
		}
		items[size++] = item;
	}
	public Type dequeue() {
		Type item = (Type) items[--size];
		items[size] = null;
		return item;
	}
	public Boolean isEmpty(){
		return size == 0;
	}



	/* TESTS */
	public static void main(String[] args) {
		Queue s = new Queue<Integer>();

		s.push(4);
		s.push(5);

		assert !s.isEmpty();
		assert s.pop() == 5;
		assert s.pop() == 4;
		assert s.isEmpty();
	}
}
