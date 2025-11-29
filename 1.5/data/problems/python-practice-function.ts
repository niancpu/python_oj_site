import { Problem } from '../../types';
import { pythonPracticeFunctionTestCases } from '../testcases/python-practice-function';

export const pythonPracticeFunctionProblems: Problem[] = [
    {
        id: 101,
        title: '定义简单函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '定义一个名为 `add` 的函数，接收两个参数并返回它们的和。',
        inputFormat: '输入两个以空格分隔的数字。',
        outputFormat: '输出这两个数字的和。',
        tags: ['函数', '基础'],
        examples: [
            {
                input: '3 5',
                output: '8',
            }
        ],
        starterCode: `
def add(a, b):
    # 在这里编写你的代码
    pass

# 读取输入并调用函数
a, b = map(float, input().split())
# 如果是整数，显示为整数
result = add(a, b)
print(int(result) if result == int(result) else result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[101]
    },
    {
        id: 102,
        title: '默认参数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '定义一个名为 `greet` 的函数，接收一个参数 `name`，默认值为 "World"。函数返回 "Hello, {name}!"。',
        inputFormat: '输入一个名字（字符串）。',
        outputFormat: '输出问候语。',
        tags: ['函数', '参数'],
        examples: [
            {
                input: 'Alice',
                output: 'Hello, Alice!',
            }
        ],
        starterCode: `
def greet(name="World"):
    return f"Hello, {name}!"

name = input().strip()
if name:
    print(greet(name))
else:
    print(greet())
`.trim(),
        testCases: pythonPracticeFunctionTestCases[102]
    },
    {
        id: 103,
        title: '可变参数求和',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '定义一个函数 `sum_all`，使用 `*args` 接收任意数量的参数，并返回它们的和。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出所有数字的和。',
        tags: ['函数', '*args'],
        examples: [
            {
                input: '1 2 3',
                output: '6',
            }
        ],
        starterCode: `
def sum_all(*args):
    # 在这里编写你的代码
    pass

nums = list(map(float, input().split()))
result = sum_all(*nums)
print(int(result) if result == int(result) else result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[103]
    },
    {
        id: 104,
        title: 'Lambda 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '定义一个 lambda 函数 `square`，计算一个数的平方。',
        inputFormat: '输入一个数字。',
        outputFormat: '输出该数字的平方。',
        tags: ['Lambda', '函数'],
        examples: [
            {
                input: '5',
                output: '25',
            }
        ],
        starterCode: `
# 定义 lambda 函数
square = lambda x: x # 修改这里

num = float(input())
result = square(num)
print(int(result) if result == int(result) else result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[104]
    },
    {
        id: 105,
        title: '递归求阶乘',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用递归函数计算 n 的阶乘。',
        inputFormat: '输入一个非负整数 n。',
        outputFormat: '输出 n!。',
        tags: ['递归', '函数'],
        examples: [
            {
                input: '5',
                output: '120',
            }
        ],
        starterCode: `
def factorial(n):
    # 编写递归逻辑
    pass

n = int(input())
print(factorial(n))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[105]
    },
    {
        id: 106,
        title: '使用 math 模块',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '导入 `math` 模块，计算输入数字的平方根。',
        inputFormat: '输入一个非负数字。',
        outputFormat: '输出平方根。',
        tags: ['模块', 'math'],
        examples: [
            {
                input: '16',
                output: '4.0',
            }
        ],
        starterCode: `
import math

num = float(input())
# 使用 math.sqrt 计算
print(math.sqrt(num))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[106]
    },
    {
        id: 107,
        title: '使用 datetime 模块',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '导入 `datetime` 模块，将输入的日期字符串 "YYYY-MM-DD" 解析为日期对象，并输出其年份。',
        inputFormat: '输入日期字符串 "YYYY-MM-DD"。',
        outputFormat: '输出年份（整数）。',
        tags: ['模块', 'datetime'],
        examples: [
            {
                input: '2023-01-01',
                output: '2023',
            }
        ],
        starterCode: `
from datetime import datetime

date_str = input()
# 解析日期并输出年份
dt = datetime.strptime(date_str, "%Y-%m-%d")
print(dt.year)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[107]
    },
    {
        id: 108,
        title: '修改列表 (可变参数)',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '定义函数 `append_hundred`，接收一个列表，在列表末尾添加 100。注意列表是可变对象。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出修改后的列表。',
        tags: ['函数', '引用传递'],
        examples: [
            {
                input: '1 2 3',
                output: '1 2 3 100',
            }
        ],
        starterCode: `
def append_hundred(lst):
    # 修改列表
    pass

nums = list(map(int, input().split()))
append_hundred(nums)
print(" ".join(map(str, nums)))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[108]
    },
    {
        id: 109,
        title: '关键字参数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '定义函数 `info`，接收 `name` 和 `age` 两个关键字参数，返回 "Name: {name}, Age: {age}"。',
        inputFormat: '输入名字和年龄，空格分隔。',
        outputFormat: '输出格式化字符串。',
        tags: ['函数', '参数'],
        examples: [
            {
                input: 'Alice 20',
                output: 'Name: Alice, Age: 20',
            }
        ],
        starterCode: `
def info(name, age):
    return f"Name: {name}, Age: {age}"

n, a = input().split()
print(info(name=n, age=a))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[109]
    },
    {
        id: 110,
        title: '生成器函数',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '定义一个生成器函数 `squares(n)`，生成 0 到 n-1 的平方数。',
        inputFormat: '输入整数 n。',
        outputFormat: '输出生成的平方数，空格分隔。',
        tags: ['生成器', 'yield'],
        examples: [
            {
                input: '5',
                output: '0 1 4 9 16',
            }
        ],
        starterCode: `
def squares(n):
    for i in range(n):
        yield i * i

n = int(input())
print(" ".join(map(str, squares(n))))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[110]
    },
    {
        id: 111,
        title: 'Map 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `map` 函数将输入的数字列表中的每个元素乘以 2。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出处理后的数字，空格分隔。',
        tags: ['map', '函数'],
        examples: [
            {
                input: '1 2 3',
                output: '2 4 6',
            }
        ],
        starterCode: `
def double_list(nums):
    # 使用 map 函数
    return list(map(lambda x: x * 2, nums))

nums = list(map(int, input().split()))
print(" ".join(map(str, double_list(nums))))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[111]
    },
    {
        id: 112,
        title: 'Filter 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `filter` 函数从列表中筛选出偶数。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出筛选出的偶数，空格分隔。',
        tags: ['filter', '函数'],
        examples: [
            {
                input: '1 2 3 4 5',
                output: '2 4',
            }
        ],
        starterCode: `
def filter_even(nums):
    # 使用 filter 函数
    return list(filter(lambda x: x % 2 == 0, nums))

nums = list(map(int, input().split()))
print(" ".join(map(str, filter_even(nums))))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[112]
    },
    {
        id: 113,
        title: 'Zip 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `zip` 函数将两个列表对应元素打包成元组。',
        inputFormat: '第一行输入一组数字，第二行输入一组字母，长度相同，空格分隔。',
        outputFormat: '输出打包后的列表（字符串形式）。',
        tags: ['zip', '函数'],
        examples: [
            {
                input: '1 2 3\\na b c',
                output: "[(1, 'a'), (2, 'b'), (3, 'c')]",
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))
chars = input().split()

# 使用 zip 打包
result = list(zip(nums, chars))
print(result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[113]
    },
    {
        id: 114,
        title: 'Enumerate 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `enumerate` 函数遍历列表，输出索引和值。',
        inputFormat: '输入一行以空格分隔的字符串。',
        outputFormat: '每行输出 "Index: {index}, Value: {value}"。',
        tags: ['enumerate', '函数'],
        examples: [
            {
                input: 'apple banana',
                output: 'Index: 0, Value: apple\\nIndex: 1, Value: banana',
            }
        ],
        starterCode: `
items = input().split()

# 使用 enumerate 遍历
for index, value in enumerate(items):
    print(f"Index: {index}, Value: {value}")
`.trim(),
        testCases: pythonPracticeFunctionTestCases[114]
    },
    {
        id: 115,
        title: 'Sorted 函数 (自定义排序)',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `sorted` 函数对字符串列表按长度进行排序，长度相同的按字母序排序。',
        inputFormat: '输入一行以空格分隔的字符串。',
        outputFormat: '输出排序后的字符串，空格分隔。',
        tags: ['sorted', '函数'],
        examples: [
            {
                input: 'apple fig banana',
                output: 'fig apple banana',
            }
        ],
        starterCode: `
words = input().split()

# 使用 sorted 排序，key 为长度
sorted_words = sorted(words, key=lambda x: (len(x), x))
print(" ".join(sorted_words))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[115]
    },
    {
        id: 116,
        title: 'Any 和 All 函数',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '判断列表中是否所有数字都大于 0 (all)，以及是否有数字大于 10 (any)。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出两行，第一行是 all 的结果 (True/False)，第二行是 any 的结果。',
        tags: ['any', 'all', '函数'],
        examples: [
            {
                input: '1 5 12',
                output: 'True\\nTrue',
            }
        ],
        starterCode: `
nums = list(map(int, input().split()))

# 使用 all 和 any
print(all(x > 0 for x in nums))
print(any(x > 10 for x in nums))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[116]
    },
    {
        id: 117,
        title: 'Random 模块 (随机整数)',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '导入 `random` 模块，设置种子为 42，然后生成一个 [1, 100] 之间的随机整数。',
        inputFormat: '无输入。',
        outputFormat: '输出生成的随机数。',
        tags: ['random', '模块'],
        examples: [
            {
                input: '',
                output: '82',
            }
        ],
        starterCode: `
import random

# 设置种子以保证结果可复现
random.seed(42)
# 生成随机数
print(random.randint(1, 100))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[117]
    },
    {
        id: 118,
        title: 'Re 模块 (正则匹配)',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `re` 模块检查输入字符串是否是有效的电子邮件地址（简单规则：包含 @ 和 . 即可）。',
        inputFormat: '输入一个字符串。',
        outputFormat: '如果是有效邮箱输出 "Valid"，否则输出 "Invalid"。',
        tags: ['re', '正则', '模块'],
        examples: [
            {
                input: 'test@example.com',
                output: 'Valid',
            }
        ],
        starterCode: `
import re

email = input()
# 简单正则匹配
if re.match(r"[^@]+@[^@]+\\.[^@]+", email):
    print("Valid")
else:
    print("Invalid")
`.trim(),
        testCases: pythonPracticeFunctionTestCases[118]
    },
    {
        id: 119,
        title: 'Collections Counter',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `collections.Counter` 统计字符串中每个字符出现的次数，并按字符字母序输出。',
        inputFormat: '输入一个字符串。',
        outputFormat: '每行输出 "字符: 次数"。',
        tags: ['collections', 'Counter', '模块'],
        examples: [
            {
                input: 'hello',
                output: 'e: 1\\nh: 1\\nl: 2\\no: 1',
            }
        ],
        starterCode: `
from collections import Counter

text = input()
counts = Counter(text)

# 按键排序输出
for char in sorted(counts.keys()):
    print(f"{char}: {counts[char]}")
`.trim(),
        testCases: pythonPracticeFunctionTestCases[119]
    },
    {
        id: 120,
        title: 'JSON 模块',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `json` 模块解析 JSON 字符串，并输出其中 "name" 字段的值。',
        inputFormat: '输入一个 JSON 字符串。',
        outputFormat: '输出 "name" 的值。',
        tags: ['json', '模块'],
        examples: [
            {
                input: '{"name": "Alice", "age": 25}',
                output: 'Alice',
            }
        ],
        starterCode: `
import json

json_str = input()
try:
    data = json.loads(json_str)
    print(data.get("name"))
except:
    print("Error")
`.trim(),
        testCases: pythonPracticeFunctionTestCases[120]
    },
    {
        id: 121,
        title: 'Itertools Product',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `itertools.product` 计算两个列表的笛卡尔积。',
        inputFormat: '第一行输入一组数字，第二行输入一组字母，空格分隔。',
        outputFormat: '输出笛卡尔积列表（字符串形式）。',
        tags: ['itertools', 'product', '模块'],
        examples: [
            {
                input: '1 2\\na b',
                output: "[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]",
            }
        ],
        starterCode: `
import itertools

nums = list(map(int, input().split()))
chars = input().split()

# 计算笛卡尔积
result = list(itertools.product(nums, chars))
print(result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[121]
    },
    {
        id: 122,
        title: 'Functools Reduce',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '使用 `functools.reduce` 计算列表中所有数字的乘积。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '输出乘积。',
        tags: ['functools', 'reduce', '模块'],
        examples: [
            {
                input: '1 2 3 4',
                output: '24',
            }
        ],
        starterCode: `
from functools import reduce

nums = list(map(int, input().split()))

# 使用 reduce 计算乘积
if not nums:
    print(0)
else:
    result = reduce(lambda x, y: x * y, nums)
    print(result)
`.trim(),
        testCases: pythonPracticeFunctionTestCases[122]
    },
    {
        id: 123,
        title: 'Try-Except 异常处理',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '编写代码处理除零异常。读取两个数字 a 和 b，计算 a / b。如果 b 为 0，输出 "Division by zero"。',
        inputFormat: '输入两个数字，空格分隔。',
        outputFormat: '输出结果或错误信息。',
        tags: ['异常处理', 'try-except'],
        examples: [
            {
                input: '10 2',
                output: '5.0',
            }
        ],
        starterCode: `
try:
    a, b = map(float, input().split())
    # 计算除法
    print(a / b)
except ZeroDivisionError:
    print("Division by zero")
except Exception:
    print("Error")
`.trim(),
        testCases: pythonPracticeFunctionTestCases[123]
    },
    {
        id: 124,
        title: '装饰器 (Decorator)',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '定义一个装饰器 `uppercase_decorator`，将函数返回的字符串转换为大写。',
        inputFormat: '输入一个字符串。',
        outputFormat: '输出大写字符串。',
        tags: ['装饰器', '函数'],
        examples: [
            {
                input: 'hello',
                output: 'HELLO',
            }
        ],
        starterCode: `
def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"Hello, {name}"

name = input()
print(greet(name))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[124]
    },
    {
        id: 125,
        title: '闭包 (Closure)',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '定义一个闭包 `make_multiplier(n)`，返回一个函数，该函数将输入乘以 n。',
        inputFormat: '第一行输入 n，第二行输入要乘以的数字 x。',
        outputFormat: '输出 n * x。',
        tags: ['闭包', '函数'],
        examples: [
            {
                input: '3\\n5',
                output: '15',
            }
        ],
        starterCode: `
def make_multiplier(n):
    # 定义闭包
    def multiplier(x):
        return x * n
    return multiplier

n = int(input())
x = int(input())
times_n = make_multiplier(n)
print(times_n(x))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[125]
    },
    {
        id: 126,
        title: '集合操作 (Set)',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '输入两个列表，转换为集合，计算它们的并集和交集。',
        inputFormat: '两行输入，每行一组数字，空格分隔。',
        outputFormat: '第一行输出并集（排序），第二行输出交集（排序）。',
        tags: ['set', '集合'],
        examples: [
            {
                input: '1 2 3\\n3 4 5',
                output: '1 2 3 4 5\\n3',
            }
        ],
        starterCode: `
list1 = list(map(int, input().split()))
list2 = list(map(int, input().split()))

set1 = set(list1)
set2 = set(list2)

# 并集和交集
union_set = sorted(list(set1 | set2))
intersection_set = sorted(list(set1 & set2))

print(" ".join(map(str, union_set)))
print(" ".join(map(str, intersection_set)))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[126]
    },
    {
        id: 127,
        title: 'String 模块常量',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '导入 `string` 模块，输出 `ascii_letters` 常量的前 n 个字符。',
        inputFormat: '输入一个整数 n (n <= 52)。',
        outputFormat: '输出前 n 个字母。',
        tags: ['string', '模块'],
        examples: [
            {
                input: '5',
                output: 'abcde',
            }
        ],
        starterCode: `
import string

n = int(input())
# 输出 ascii_letters 的前 n 位
print(string.ascii_letters[:n])
`.trim(),
        testCases: pythonPracticeFunctionTestCases[127]
    },
    {
        id: 128,
        title: 'Math 模块 (GCD)',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `math.gcd` 计算两个整数的最大公约数。',
        inputFormat: '输入两个整数，空格分隔。',
        outputFormat: '输出最大公约数。',
        tags: ['math', 'gcd', '模块'],
        examples: [
            {
                input: '12 18',
                output: '6',
            }
        ],
        starterCode: `
import math

a, b = map(int, input().split())
# 计算 GCD
print(math.gcd(a, b))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[128]
    },
    {
        id: 129,
        title: 'Statistics 模块',
        difficulty: '简单',
        category: 'Python 函数与模块',
        description: '使用 `statistics` 模块计算列表的平均值 (mean) 和中位数 (median)。',
        inputFormat: '输入一行以空格分隔的数字。',
        outputFormat: '第一行输出平均值，第二行输出中位数。',
        tags: ['statistics', '模块'],
        examples: [
            {
                input: '1 2 3 4 5',
                output: '3.0\\n3',
            }
        ],
        starterCode: `
import statistics

nums = list(map(float, input().split()))

# 计算平均值和中位数
print(statistics.mean(nums))
print(statistics.median(nums))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[129]
    },
    {
        id: 130,
        title: 'Datetime 模块 (Timedelta)',
        difficulty: '中等',
        category: 'Python 函数与模块',
        description: '计算给定日期加上 n 天后的日期。',
        inputFormat: '第一行输入日期 "YYYY-MM-DD"，第二行输入整数 n。',
        outputFormat: '输出计算后的日期 "YYYY-MM-DD"。',
        tags: ['datetime', 'timedelta', '模块'],
        examples: [
            {
                input: '2023-01-01\\n10',
                output: '2023-01-11',
            }
        ],
        starterCode: `
from datetime import datetime, timedelta

date_str = input()
days = int(input())

dt = datetime.strptime(date_str, "%Y-%m-%d")
# 加上 days 天
new_dt = dt + timedelta(days=days)
print(new_dt.strftime("%Y-%m-%d"))
`.trim(),
        testCases: pythonPracticeFunctionTestCases[130]
    }
];
