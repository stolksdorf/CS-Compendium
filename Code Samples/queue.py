class Queue(object) :
	def __init__(self):
		self.head = 0
		self.tail = 0
		self.items = []

	def __getitem__(self,key):
		return self.items[key]

	def enqueue(self, item):
		self.tail += 1
		self.items.append(item)

	def dequeue(self):
		self.head += 1
		return self.items.pop(0)

	def isEmpty(self):
		return self.head == self.tail


# Tests
q = Queue()
q.enqueue(4)
q.enqueue(5)

assert q.items == [4,5]
assert not q.isEmpty()
assert q[1]    == 5
assert q.dequeue() == 4
assert q.dequeue() == 5
assert q.isEmpty()