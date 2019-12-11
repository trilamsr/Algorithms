class Node:
  def init(self, val, next):
    self.val = val
    self.next = next

def sort_lists(lst):
  if len(lst) == 0: return None
  for k in exp_range(1, len(lst), 2):
    for i in range(0, len(lst)-k, 2*k):
      lst[i] = merge(lst[i], lst[i+k])
  return lst[0]

def exp_range(start, end, step):
  while start < end:
    yield start
    start *= step

def merge(l1, l2):
  head = Node(0)
  curr = head

# while both are not None
  while l1 and l2:
    if l1.val < l2.val:
      curr.next, l1 = l1, l1.next
    else:
      curr.next, l2 = l2, l2.next
    curr = curr.next

# pick either list that is not None
  curr.next = l1 or l2
  return head.next