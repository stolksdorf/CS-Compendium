class Stack(object) :
	def __init__(self):
		self.top = 0
		self.items = []

	def __getitem__(self,key):
		return self.items[key]

	def push(self, item):
		self.top += 1
		self.items.append(item)

	def pop(self):
		self.top -= 1
		return self.items.pop()

	def isEmpty(self):
		return self.top == 0




# Tests
s = Stack()
s.push(4)
s.push(5)

assert s.items == [4,5]
assert not s.isEmpty()
assert s[1]    == 5
assert s.pop() == 5
assert s.pop() == 4
assert s.isEmpty()