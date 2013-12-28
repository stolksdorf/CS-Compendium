def MergeSort(arr):
	if len(array) <= 1:
		return array

	result = []
	mid = int(len(arr)/2)
	left = MergeSort(arr[:mid])
	right = MergeSort(arr[mid:])

	i,j = 0,0
	while i < len(left) and j < len(right):
		if left[i] <= right[j]:
			result.append(left[i])
			i += 1
		else:
			result.append(right[j])
			j += 1
	result += left[i:]
	result += right[j:]
	return result