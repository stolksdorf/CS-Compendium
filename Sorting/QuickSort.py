def QuickSort(array):
	if len(array) <= 1:
		return array

	left, right = [], []
	pivot = array[(len(x)-1)/2]
	for x in array:
		if x < pivot:
			left.append(x)
		if x > pivot:
			right.append(x)
	return QuickSort(left)+[pivot]+QuickSort(right)