import { Problem } from '../../types';
import { pythonPracticeDataStructTestCases } from '../testcases/python-practice-datastruct';

export const pythonPracticeDataStructProblems: Problem[] = [
    {
        id: 59,
        title: '列表去重',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入一个列表，输出去重后的列表（保持原有顺序或排序均可，本题建议排序输出以便验证）。',
        inputFormat: '输入一行以空格分隔的整数。',
        outputFormat: '输出去重并排序后的列表，以空格分隔。',
        tags: ['列表', '集合'],
        examples: [
            {
                input: '1 2 2 3 3 3',
                output: '1 2 3',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
unique_nums = sorted(list(set(nums)))
print(" ".join(map(str, unique_nums)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[59]
    },
    {
        id: 60,
        title: '列表排序',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表和排序模式（asc/desc），按要求排序。',
        inputFormat: '第一行输入以空格分隔的整数。\n第二行输入 "asc" 或 "desc"。',
        outputFormat: '输出排序后的列表。',
        tags: ['列表', '排序'],
        examples: [
            {
                input: '3 1 4\nasc',
                output: '1 3 4',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
mode = input()
if mode == 'asc':
    nums.sort()
elif mode == 'desc':
    nums.sort(reverse=True)
print(" ".join(map(str, nums)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[60]
    },
    {
        id: 61,
        title: '字典按值排序',
        difficulty: '中等',
        category: 'Python 数据结构：字典与集合',
        description: '输入一个字典（格式 key:value,key:value），按值升序输出键值对。',
        inputFormat: '输入一行字符串，格式如 "a:3,b:1,c:2"。',
        outputFormat: '按值升序输出，每行 "key:value"。',
        tags: ['字典', '排序'],
        examples: [
            {
                input: 'a:3,b:1,c:2',
                output: 'b:1\nc:2\na:3',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    k, v = item.split(':')
    d[k] = int(v)

sorted_items = sorted(d.items(), key=lambda x: x[1])
for k, v in sorted_items:
    print(f"{k}:{v}")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[61]
    },
    {
        id: 62,
        title: '查找最大元素索引',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表，输出最大元素的所有索引。',
        inputFormat: '输入一行以空格分隔的整数。',
        outputFormat: '输出所有最大值的索引，以空格分隔。',
        tags: ['列表', '循环'],
        examples: [
            {
                input: '2 5 3 5',
                output: '1 3',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
max_val = max(nums)
indices = [i for i, x in enumerate(nums) if x == max_val]
print(" ".join(map(str, indices)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[62]
    },
    {
        id: 63,
        title: '合并两个有序列表',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入两个升序列表，合并为一个升序列表。',
        inputFormat: '两行输入，每行一个有序列表。',
        outputFormat: '输出合并后的有序列表。',
        tags: ['列表', '排序'],
        examples: [
            {
                input: '1 3 5\n2 4 6',
                output: '1 2 3 4 5 6',
            }
        ],
        starterCode: `
l1 = list(map(int, input().split()))
l2 = list(map(int, input().split()))
merged = sorted(l1 + l2)
print(" ".join(map(str, merged)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[63]
    },
    {
        id: 64,
        title: '统计元素出现次数',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入列表，统计每个元素出现次数。',
        inputFormat: '输入一行以空格分隔的元素。',
        outputFormat: '按元素字符串排序输出，每行 "元素:次数"。',
        tags: ['列表', '字典'],
        examples: [
            {
                input: '1 2 2 3',
                output: '1:1\n2:2\n3:1',
            }
        ],
        starterCode: `
items = input().split()
counts = {}
for item in items:
    counts[item] = counts.get(item, 0) + 1
for item in sorted(counts.keys()):
    print(f"{item}:{counts[item]}")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[64]
    },
    {
        id: 65,
        title: '生成偶数列表',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '使用列表推导式生成 1 到 100 中所有偶数的列表。',
        inputFormat: '无输入。',
        outputFormat: '输出列表字符串。',
        tags: ['列表推导式'],
        examples: [
            {
                input: '',
                output: '[2, 4, ... 100]',
            }
        ],
        starterCode: `
evens = [i for i in range(1, 101) if i % 2 == 0]
# 为了格式匹配，这里简单打印前几个和最后几个，或者直接打印
# 题目要求生成列表，这里直接打印列表内容
print(" ".join(map(str, evens)))
`.trim(),
        testCases: [
            { input: '', expectedOutput: '2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100' }
        ]
    },
    {
        id: 66,
        title: '字典键值交换',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入字典，输出键值交换后的字典（假设值唯一）。',
        inputFormat: '输入格式 "k:v,k:v"。',
        outputFormat: '输出交换后的 "v:k"，按新键排序。',
        tags: ['字典推导式'],
        examples: [
            {
                input: 'a:1,b:2',
                output: '1:a\n2:b',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    k, v = item.split(':')
    d[k] = v # 保持字符串

swapped = {v: k for k, v in d.items()}
for k in sorted(swapped.keys()):
    print(f"{k}:{swapped[k]}")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[66]
    },
    {
        id: 67,
        title: '判断列表为空',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表，判断是否为空。',
        inputFormat: '输入一行元素，可能为空行。',
        outputFormat: 'Yes 或 No。',
        tags: ['列表'],
        examples: [
            {
                input: '',
                output: 'Yes',
            }
        ],
        starterCode: `
try:
    line = input().strip()
    if not line:
        print("Yes")
    else:
        print("No")
except EOFError:
    print("Yes")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[67]
    },
    {
        id: 68,
        title: '删除列表元素',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表和指定元素，删除所有该元素。',
        inputFormat: '第一行列表，第二行要删除的元素。',
        outputFormat: '输出处理后的列表。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3 2\n2',
                output: '1 3',
            }
        ],
        starterCode: `
nums = input().split()
target = input()
result = [x for x in nums if x != target]
print(" ".join(result))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[68]
    },
    {
        id: 69,
        title: '列表交集',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入两个列表，输出它们的交集（排序输出）。',
        inputFormat: '两行输入。',
        outputFormat: '输出交集元素。',
        tags: ['列表', '集合'],
        examples: [
            {
                input: '1 2 3\n2 3 4',
                output: '2 3',
            }
        ],
        starterCode: `
l1 = set(input().split())
l2 = set(input().split())
inter = sorted(list(l1 & l2))
print(" ".join(inter))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[69]
    },
    {
        id: 70,
        title: '列表并集',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入两个列表，输出它们的并集（去重并排序）。',
        inputFormat: '两行输入。',
        outputFormat: '输出并集元素。',
        tags: ['列表', '集合'],
        examples: [
            {
                input: '1 2 2\n3 2',
                output: '1 2 3',
            }
        ],
        starterCode: `
l1 = set(input().split())
l2 = set(input().split())
union = sorted(list(l1 | l2))
print(" ".join(union))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[70]
    },
    {
        id: 71,
        title: '列表差集',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入两个列表 l1, l2，输出 l1 - l2（在 l1 中但不在 l2 中的元素）。',
        inputFormat: '两行输入。',
        outputFormat: '输出差集元素。',
        tags: ['列表', '集合'],
        examples: [
            {
                input: '1 2 3\n2 4',
                output: '1 3',
            }
        ],
        starterCode: `
l1 = set(input().split())
l2 = set(input().split())
diff = sorted(list(l1 - l2))
print(" ".join(diff))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[71]
    },
    {
        id: 72,
        title: '列表拆分',
        difficulty: '中等',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表和长度 k，将列表按长度 k 拆分。',
        inputFormat: '第一行列表，第二行 k。',
        outputFormat: '输出拆分后的子列表，格式如 "[1, 2] [3, 4]"。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3 4 5\n2',
                output: '[1, 2] [3, 4] [5]',
            }
        ],
        starterCode: `
nums = input().split()
k = int(input())
result = [nums[i:i+k] for i in range(0, len(nums), k)]
# 格式化输出
print(" ".join([str(sub).replace("'", "") for sub in result]))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[72]
    },
    {
        id: 73,
        title: '字典最大值键',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入字典，输出值最大的所有键（排序）。',
        inputFormat: '格式 "k:v,k:v"。',
        outputFormat: '输出键，空格分隔。',
        tags: ['字典'],
        examples: [
            {
                input: 'a:5,b:3,c:5',
                output: 'a c',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    k, v = item.split(':')
    d[k] = int(v)

max_val = max(d.values())
keys = sorted([k for k, v in d.items() if v == max_val])
print(" ".join(keys))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[73]
    },
    {
        id: 74,
        title: '列表反转 (No Slice)',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表，反转输出（不使用 [::-1]）。',
        inputFormat: '输入一行列表。',
        outputFormat: '输出反转后的列表。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3',
                output: '3 2 1',
            }
        ],
        starterCode: `
nums = input().split()
nums.reverse()
print(" ".join(nums))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[74]
    },
    {
        id: 75,
        title: '统计字典键个数',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入字典，输出键的总数。',
        inputFormat: '格式 "k:v,k:v"。',
        outputFormat: '整数。',
        tags: ['字典'],
        examples: [
            {
                input: 'a:1,b:2',
                output: '2',
            }
        ],
        starterCode: `
try:
    s = input()
    if not s:
        print(0)
    else:
        items = s.split(',')
        print(len(items))
except EOFError:
    print(0)
`.trim(),
        testCases: pythonPracticeDataStructTestCases[75]
    },
    {
        id: 76,
        title: '判断元素存在',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表和元素，判断元素是否存在。',
        inputFormat: '第一行列表，第二行元素。',
        outputFormat: 'Yes 或 No。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3\n2',
                output: 'Yes',
            }
        ],
        starterCode: `
nums = input().split()
target = input()
if target in nums:
    print("Yes")
else:
    print("No")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[76]
    },
    {
        id: 77,
        title: '拼接字符串列表',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入字符串列表，拼接为一个字符串。',
        inputFormat: '输入一行以空格分隔的单词。',
        outputFormat: '输出拼接后的句子。',
        tags: ['字符串', '列表'],
        examples: [
            {
                input: 'I love Python',
                output: 'I love Python',
            }
        ],
        starterCode: `
words = input().split()
print(" ".join(words))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[77]
    },
    {
        id: 78,
        title: '字典添加元素',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入初始字典和新键值对，输出更新后的字典。',
        inputFormat: '第一行初始字典 "k:v,k:v"。第二行新键值对 "k v"。',
        outputFormat: '按键排序输出字典。',
        tags: ['字典'],
        examples: [
            {
                input: 'a:1\nb 2',
                output: 'a:1\nb:2',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    if ':' in item:
        k, v = item.split(':')
        d[k] = v

new_k, new_v = input().split()
d[new_k] = new_v

for k in sorted(d.keys()):
    print(f"{k}:{d[k]}")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[78]
    },
    {
        id: 79,
        title: '列表求和',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入数字列表，计算和。',
        inputFormat: '输入一行数字。',
        outputFormat: '输出和。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3',
                output: '6',
            }
        ],
        starterCode: `
nums = list(map(float, input().split()))
print(int(sum(nums)) if sum(nums).is_integer() else sum(nums))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[79]
    },
    {
        id: 80,
        title: '删除字典键',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入字典和要删除的键，输出更新后的字典。若键不存在输出 "键不存在"。',
        inputFormat: '第一行字典，第二行键。',
        outputFormat: '按键排序输出字典或错误信息。',
        tags: ['字典'],
        examples: [
            {
                input: 'a:1,b:2\na',
                output: 'b:2',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    k, v = item.split(':')
    d[k] = v

key_to_del = input()
if key_to_del in d:
    del d[key_to_del]
    for k in sorted(d.keys()):
        print(f"{k}:{d[k]}")
else:
    print("键不存在")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[80]
    },
    {
        id: 81,
        title: '元组转列表修改',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入元组（空格分隔），转换为列表后修改第 2 个元素（索引 1）为指定值，再输出。',
        inputFormat: '第一行元组元素，第二行新值。',
        outputFormat: '输出修改后的列表元素。',
        tags: ['列表', '元组'],
        examples: [
            {
                input: '1 2 3\n10',
                output: '1 10 3',
            }
        ],
        starterCode: `
t = tuple(input().split())
lst = list(t)
new_val = input()
if len(lst) > 1:
    lst[1] = new_val
print(" ".join(lst))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[81]
    },
    {
        id: 82,
        title: '查找首个索引',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '输入列表和元素，输出第一个匹配元素的索引。不存在输出 -1。',
        inputFormat: '第一行列表，第二行元素。',
        outputFormat: '索引值。',
        tags: ['列表'],
        examples: [
            {
                input: '1 2 3 2\n2',
                output: '1',
            }
        ],
        starterCode: `
nums = input().split()
target = input()
try:
    print(nums.index(target))
except ValueError:
    print("-1")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[82]
    },
    {
        id: 83,
        title: '字典按键排序',
        difficulty: '简单',
        category: 'Python 数据结构：字典与集合',
        description: '输入字典，按键升序输出。',
        inputFormat: '格式 "k:v,k:v"。',
        outputFormat: '输出 "k:v"。',
        tags: ['字典'],
        examples: [
            {
                input: 'b:2,a:1',
                output: 'a:1\nb:2',
            }
        ],
        starterCode: `
s = input()
items = s.split(',')
d = {}
for item in items:
    k, v = item.split(':')
    d[k] = v

for k in sorted(d.keys()):
    print(f"{k}:{d[k]}")
`.trim(),
        testCases: pythonPracticeDataStructTestCases[83]
    },
    {
        id: 84,
        title: '列表创建与访问',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建包含 10 个随机整数（1-100）的列表，输出列表的第 3 个元素和最后一个元素。',
        inputFormat: '输入10个整数（1-100之间），用空格分隔。',
        outputFormat: '输出两行，第一行为第3个元素（索引2），第二行为最后一个元素。',
        tags: ['列表', '索引'],
        examples: [
            {
                input: '23 45 67 12 89 34 56 78 90 11',
                output: '67\n11',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
print(nums[2])
print(nums[-1])
`.trim(),
        testCases: pythonPracticeDataStructTestCases[84]
    },
    {
        id: 85,
        title: '列表追加与插入',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '读取 3 个整数，先追加到列表末尾，再将第二个整数插入到列表第 2 个位置（索引 1），输出最终列表。',
        inputFormat: '输入3个整数，用空格分隔。',
        outputFormat: '输出最终列表，元素用空格分隔。',
        tags: ['列表', 'append', 'insert'],
        examples: [
            {
                input: '10 20 30',
                output: '10 20 20 30',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
lst = []
for num in nums:
    lst.append(num)
lst.insert(1, nums[1])
print(' '.join(map(str, lst)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[85]
    },
    {
        id: 86,
        title: '列表删除元素',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建列表[1,2,3,4,5]，删除元素 3（按值删除）和索引为 4 的元素，输出最终列表。',
        inputFormat: '无输入。',
        outputFormat: '输出最终列表，元素用空格分隔。',
        tags: ['列表', 'remove', 'del'],
        examples: [
            {
                input: '',
                output: '1 2 4',
            }
        ],
        starterCode: `
lst = [1, 2, 3, 4, 5]
lst.remove(3)
del lst[3]
print(' '.join(map(str, lst)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[86]
    },
    {
        id: 87,
        title: '列表排序',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '读取 5 个整数组成列表，对列表进行升序排序后输出；再进行降序排序输出。',
        inputFormat: '输入5个整数，用空格分隔。',
        outputFormat: '输出两行，第一行为升序排序结果，第二行为降序排序结果，元素用空格分隔。',
        tags: ['列表', 'sort', '排序'],
        examples: [
            {
                input: '3 1 4 1 5',
                output: '1 1 3 4 5\n5 4 3 1 1',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
nums.sort()
print(' '.join(map(str, nums)))
nums.sort(reverse=True)
print(' '.join(map(str, nums)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[87]
    },
    {
        id: 88,
        title: '列表切片',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建列表[0,1,2,3,4,5,6,7,8,9]，使用切片输出前 3 个元素、后 4 个元素、索引 2-6 的元素（含头不含尾）。',
        inputFormat: '无输入。',
        outputFormat: '输出三行，分别为前3个元素、后4个元素、索引2-6的元素，元素用空格分隔。',
        tags: ['列表', '切片'],
        examples: [
            {
                input: '',
                output: '0 1 2\n6 7 8 9\n2 3 4 5',
            }
        ],
        starterCode: `
lst = list(range(10))
print(' '.join(map(str, lst[:3])))
print(' '.join(map(str, lst[-4:])))
print(' '.join(map(str, lst[2:6])))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[88]
    },
    {
        id: 89,
        title: '列表推导式',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '使用列表推导式创建 1-20 之间的偶数列表（即[2,4,...,20]），输出结果。',
        inputFormat: '无输入。',
        outputFormat: '输出偶数列表，元素用空格分隔。',
        tags: ['列表推导式'],
        examples: [
            {
                input: '',
                output: '2 4 6 8 10 12 14 16 18 20',
            }
        ],
        starterCode: `
evens = [x for x in range(1, 21) if x % 2 == 0]
print(' '.join(map(str, evens)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[89]
    },
    {
        id: 90,
        title: '列表去重',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '读取一个包含重复元素的列表（如[1,2,2,3,3,3]），去除重复元素后输出（保留顺序）。',
        inputFormat: '输入若干个整数，用空格分隔。',
        outputFormat: '输出去重后的列表，元素用空格分隔，保留原顺序。',
        tags: ['列表', '去重'],
        examples: [
            {
                input: '1 2 2 3 3 3',
                output: '1 2 3',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
result = []
for num in nums:
    if num not in result:
        result.append(num)
print(' '.join(map(str, result)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[90]
    },
    {
        id: 91,
        title: '列表求和与最值',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '读取若干个整数组成列表（以 0 结束输入），计算列表元素的和、最大值、最小值。',
        inputFormat: '输入若干个整数，以0结束（0不计入列表）。',
        outputFormat: '输出三行，分别为和、最大值、最小值。',
        tags: ['列表', 'sum', 'max', 'min'],
        examples: [
            {
                input: '1 2 3 4 5 0',
                output: '15\n5\n1',
            }
        ],
        starterCode: `
nums = []
while True:
    n = int(input())
    if n == 0:
        break
    nums.append(n)
print(sum(nums))
print(max(nums))
print(min(nums))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[91]
    },
    {
        id: 92,
        title: '列表拼接与重复',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建两个列表list1 = [1,2,3]和list2 = [4,5,6]，拼接为一个新列表，再将新列表重复 2 次，输出结果。',
        inputFormat: '无输入。',
        outputFormat: '输出重复2次后的列表，元素用空格分隔。',
        tags: ['列表', '拼接', '重复'],
        examples: [
            {
                input: '',
                output: '1 2 3 4 5 6 1 2 3 4 5 6',
            }
        ],
        starterCode: `
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = (list1 + list2) * 2
print(' '.join(map(str, result)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[92]
    },
    {
        id: 93,
        title: '统计列表元素出现次数',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建列表[1,3,2,3,1,3,4]，统计元素 3 出现的次数，输出结果。',
        inputFormat: '无输入。',
        outputFormat: '输出元素3出现的次数。',
        tags: ['列表', 'count'],
        examples: [
            {
                input: '',
                output: '3',
            }
        ],
        starterCode: `
lst = [1, 3, 2, 3, 1, 3, 4]
print(lst.count(3))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[93]
    },
    {
        id: 94,
        title: '元组的创建与访问',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建元组(10,20,30,"python")，输出元组的长度和索引为 2 的元素。',
        inputFormat: '无输入。',
        outputFormat: '输出两行，第一行为元组长度，第二行为索引2的元素。',
        tags: ['元组', 'len'],
        examples: [
            {
                input: '',
                output: '4\n30',
            }
        ],
        starterCode: `
t = (10, 20, 30, "python")
print(len(t))
print(t[2])
`.trim(),
        testCases: pythonPracticeDataStructTestCases[94]
    },
    {
        id: 95,
        title: '列表与元组转换',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '将列表[1,2,3]转为元组，再将元组(4,5,6)转为列表，输出两个结果。',
        inputFormat: '无输入。',
        outputFormat: '输出两行，第一行为转换后的元组，第二行为转换后的列表。',
        tags: ['列表', '元组', '类型转换'],
        examples: [
            {
                input: '',
                output: '(1, 2, 3)\n[4, 5, 6]',
            }
        ],
        starterCode: `
lst = [1, 2, 3]
t = tuple(lst)
print(t)
t2 = (4, 5, 6)
lst2 = list(t2)
print(lst2)
`.trim(),
        testCases: pythonPracticeDataStructTestCases[95]
    },
    {
        id: 96,
        title: '找出列表中重复最多的元素',
        difficulty: '中等',
        category: 'Python 数据结构：列表与元组',
        description: '读取一个列表，输出出现次数最多的元素（若有多个，输出第一个）。',
        inputFormat: '输入若干个整数，用空格分隔。',
        outputFormat: '输出出现次数最多的元素。',
        tags: ['列表', 'count', '统计'],
        examples: [
            {
                input: '1 2 2 3 3 3',
                output: '3',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
max_count = 0
result = nums[0]
for num in set(nums):
    if nums.count(num) > max_count:
        max_count = nums.count(num)
        result = num
print(result)
`.trim(),
        testCases: pythonPracticeDataStructTestCases[96]
    },
    {
        id: 97,
        title: '列表嵌套访问',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '创建嵌套列表[[1,2,3],[4,5,6],[7,8,9]]，访问并输出元素 5（通过索引）。',
        inputFormat: '无输入。',
        outputFormat: '输出元素5。',
        tags: ['列表', '嵌套', '二维列表'],
        examples: [
            {
                input: '',
                output: '5',
            }
        ],
        starterCode: `
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][1])
`.trim(),
        testCases: pythonPracticeDataStructTestCases[97]
    },
    {
        id: 98,
        title: '过滤列表元素',
        difficulty: '简单',
        category: 'Python 数据结构：列表与元组',
        description: '使用列表推导式过滤列表[1,2,3,4,5,6,7,8,9]，保留大于 5 的元素，输出结果。',
        inputFormat: '无输入。',
        outputFormat: '输出过滤后的列表，元素用空格分隔。',
        tags: ['列表推导式', '过滤'],
        examples: [
            {
                input: '',
                output: '6 7 8 9',
            }
        ],
        starterCode: `
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = [x for x in lst if x > 5]
print(' '.join(map(str, result)))
`.trim(),
        testCases: pythonPracticeDataStructTestCases[98]
    }
];
