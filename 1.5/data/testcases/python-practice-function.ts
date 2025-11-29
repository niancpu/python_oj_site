import { TestCase } from '../../types';

export const pythonPracticeFunctionTestCases: Record<number, TestCase[]> = {
    101: [ // 定义函数
        { input: '3 5', expectedOutput: '8' },
        { input: '10 20', expectedOutput: '30' },
        { input: '-5 5', expectedOutput: '0' },
        { input: '0 0', expectedOutput: '0' },
        { input: '100 -50', expectedOutput: '50' },
        { input: '1.5 2.5', expectedOutput: '4.0' },
        { input: '-10 -20', expectedOutput: '-30' },
        { input: '999 1', expectedOutput: '1000' },
        { input: '123 456', expectedOutput: '579' },
        { input: '0.1 0.2', expectedOutput: '0.3' }, // Note: float precision might be tricky, but simple add usually ok for display
        { input: '5 5', expectedOutput: '10' },
        { input: '-1 1', expectedOutput: '0' },
        { input: '1000 2000', expectedOutput: '3000' },
        { input: '42 42', expectedOutput: '84' },
        { input: '7 8', expectedOutput: '15' },
        { input: '11 22', expectedOutput: '33' },
        { input: '9 9', expectedOutput: '18' },
        { input: '12 12', expectedOutput: '24' },
        { input: '50 50', expectedOutput: '100' },
        { input: '1 2', expectedOutput: '3' }
    ],
    102: [ // 默认参数
        { input: 'World', expectedOutput: 'Hello, World!' },
        { input: 'Python', expectedOutput: 'Hello, Python!' },
        { input: 'Alice', expectedOutput: 'Hello, Alice!' },
        { input: 'Bob', expectedOutput: 'Hello, Bob!' },
        { input: 'User', expectedOutput: 'Hello, User!' },
        { input: 'Guest', expectedOutput: 'Hello, Guest!' },
        { input: 'Admin', expectedOutput: 'Hello, Admin!' },
        { input: 'Tester', expectedOutput: 'Hello, Tester!' },
        { input: 'Developer', expectedOutput: 'Hello, Developer!' },
        { input: 'Student', expectedOutput: 'Hello, Student!' },
        { input: 'Teacher', expectedOutput: 'Hello, Teacher!' },
        { input: 'Friend', expectedOutput: 'Hello, Friend!' },
        { input: 'Everyone', expectedOutput: 'Hello, Everyone!' },
        { input: 'Nobody', expectedOutput: 'Hello, Nobody!' },
        { input: 'Somebody', expectedOutput: 'Hello, Somebody!' },
        { input: 'Future', expectedOutput: 'Hello, Future!' },
        { input: 'Past', expectedOutput: 'Hello, Past!' },
        { input: 'Now', expectedOutput: 'Hello, Now!' },
        { input: 'Here', expectedOutput: 'Hello, Here!' },
        { input: 'There', expectedOutput: 'Hello, There!' }
    ],
    103: [ // 可变参数 *args
        { input: '1 2 3', expectedOutput: '6' },
        { input: '10 20 30 40', expectedOutput: '100' },
        { input: '5', expectedOutput: '5' },
        { input: '', expectedOutput: '0' }, // Empty input -> sum is 0
        { input: '1 1 1 1 1', expectedOutput: '5' },
        { input: '-1 -2 -3', expectedOutput: '-6' },
        { input: '10 -10', expectedOutput: '0' },
        { input: '1 2 3 4 5 6 7 8 9 10', expectedOutput: '55' },
        { input: '100', expectedOutput: '100' },
        { input: '0 0 0', expectedOutput: '0' },
        { input: '1.5 2.5 3.5', expectedOutput: '7.5' },
        { input: '2 4 6 8', expectedOutput: '20' },
        { input: '1 3 5 7', expectedOutput: '16' },
        { input: '10 20', expectedOutput: '30' },
        { input: '5 5 5 5', expectedOutput: '20' },
        { input: '1 2 3 4', expectedOutput: '10' },
        { input: '9 8 7', expectedOutput: '24' },
        { input: '11 22 33', expectedOutput: '66' },
        { input: '0.1 0.2 0.3', expectedOutput: '0.6' },
        { input: '100 200 300', expectedOutput: '600' }
    ],
    104: [ // Lambda 函数
        { input: '5', expectedOutput: '25' },
        { input: '2', expectedOutput: '4' },
        { input: '10', expectedOutput: '100' },
        { input: '0', expectedOutput: '0' },
        { input: '-3', expectedOutput: '9' },
        { input: '1', expectedOutput: '1' },
        { input: '12', expectedOutput: '144' },
        { input: '8', expectedOutput: '64' },
        { input: '-5', expectedOutput: '25' },
        { input: '100', expectedOutput: '10000' },
        { input: '1.5', expectedOutput: '2.25' },
        { input: '0.5', expectedOutput: '0.25' },
        { input: '20', expectedOutput: '400' },
        { input: '9', expectedOutput: '81' },
        { input: '11', expectedOutput: '121' },
        { input: '3', expectedOutput: '9' },
        { input: '4', expectedOutput: '16' },
        { input: '6', expectedOutput: '36' },
        { input: '7', expectedOutput: '49' },
        { input: '15', expectedOutput: '225' }
    ],
    105: [ // 递归函数 (阶乘)
        { input: '5', expectedOutput: '120' },
        { input: '0', expectedOutput: '1' },
        { input: '1', expectedOutput: '1' },
        { input: '3', expectedOutput: '6' },
        { input: '4', expectedOutput: '24' },
        { input: '6', expectedOutput: '720' },
        { input: '7', expectedOutput: '5040' },
        { input: '8', expectedOutput: '40320' },
        { input: '9', expectedOutput: '362880' },
        { input: '10', expectedOutput: '3628800' },
        { input: '2', expectedOutput: '2' },
        { input: '11', expectedOutput: '39916800' },
        { input: '12', expectedOutput: '479001600' }, // Might be large, but JS/Python handle it
        { input: '5', expectedOutput: '120' },
        { input: '6', expectedOutput: '720' },
        { input: '3', expectedOutput: '6' },
        { input: '4', expectedOutput: '24' },
        { input: '1', expectedOutput: '1' },
        { input: '0', expectedOutput: '1' },
        { input: '7', expectedOutput: '5040' }
    ],
    106: [ // 模块导入 (math)
        { input: '16', expectedOutput: '4.0' },
        { input: '25', expectedOutput: '5.0' },
        { input: '100', expectedOutput: '10.0' },
        { input: '0', expectedOutput: '0.0' },
        { input: '2', expectedOutput: '1.4142135623730951' },
        { input: '3', expectedOutput: '1.7320508075688772' },
        { input: '4', expectedOutput: '2.0' },
        { input: '9', expectedOutput: '3.0' },
        { input: '1', expectedOutput: '1.0' },
        { input: '81', expectedOutput: '9.0' },
        { input: '144', expectedOutput: '12.0' },
        { input: '0.25', expectedOutput: '0.5' },
        { input: '10000', expectedOutput: '100.0' },
        { input: '36', expectedOutput: '6.0' },
        { input: '49', expectedOutput: '7.0' },
        { input: '64', expectedOutput: '8.0' },
        { input: '121', expectedOutput: '11.0' },
        { input: '400', expectedOutput: '20.0' },
        { input: '900', expectedOutput: '30.0' },
        { input: '6.25', expectedOutput: '2.5' }
    ],
    107: [ // 模块导入 (datetime) - 获取当前年份
        // This is tricky because time changes. 
        // We will ask user to print a specific date object's year to make it deterministic, 
        // or mock the input to be a date string and parse it.
        // Let's go with: Input a date string "YYYY-MM-DD", output the year using datetime module.
        { input: '2023-01-01', expectedOutput: '2023' },
        { input: '2024-12-31', expectedOutput: '2024' },
        { input: '1999-09-09', expectedOutput: '1999' },
        { input: '2000-02-29', expectedOutput: '2000' },
        { input: '2050-11-11', expectedOutput: '2050' },
        { input: '1900-01-01', expectedOutput: '1900' },
        { input: '2022-05-20', expectedOutput: '2022' },
        { input: '2010-10-10', expectedOutput: '2010' },
        { input: '2008-08-08', expectedOutput: '2008' },
        { input: '1980-05-04', expectedOutput: '1980' },
        { input: '2025-01-01', expectedOutput: '2025' },
        { input: '2023-06-15', expectedOutput: '2023' },
        { input: '2021-12-25', expectedOutput: '2021' },
        { input: '2019-01-01', expectedOutput: '2019' },
        { input: '2018-11-11', expectedOutput: '2018' },
        { input: '2015-07-04', expectedOutput: '2015' },
        { input: '2012-12-12', expectedOutput: '2012' },
        { input: '2001-09-11', expectedOutput: '2001' },
        { input: '1995-08-24', expectedOutput: '1995' },
        { input: '1949-10-01', expectedOutput: '1949' }
    ],
    108: [ // 局部变量与全局变量
        // Input a number, function adds it to a global variable (simulated by passing or just logic)
        // Actually, let's just do a function that modifies a list passed to it (mutable args)
        { input: '1 2 3', expectedOutput: '1 2 3 100' },
        { input: '10', expectedOutput: '10 100' },
        { input: '', expectedOutput: '100' },
        { input: '5 5', expectedOutput: '5 5 100' },
        { input: '0', expectedOutput: '0 100' },
        { input: '1 2', expectedOutput: '1 2 100' },
        { input: '9 8 7', expectedOutput: '9 8 7 100' },
        { input: '100', expectedOutput: '100 100' },
        { input: '-1', expectedOutput: '-1 100' },
        { input: '1 1 1', expectedOutput: '1 1 1 100' },
        { input: '2', expectedOutput: '2 100' },
        { input: '3', expectedOutput: '3 100' },
        { input: '4', expectedOutput: '4 100' },
        { input: '5', expectedOutput: '5 100' },
        { input: '6', expectedOutput: '6 100' },
        { input: '7', expectedOutput: '7 100' },
        { input: '8', expectedOutput: '8 100' },
        { input: '9', expectedOutput: '9 100' },
        { input: '10 20 30', expectedOutput: '10 20 30 100' },
        { input: '11', expectedOutput: '11 100' }
    ],
    109: [ // 关键字参数
        { input: 'Alice 20', expectedOutput: 'Name: Alice, Age: 20' },
        { input: 'Bob 30', expectedOutput: 'Name: Bob, Age: 30' },
        { input: 'Charlie 25', expectedOutput: 'Name: Charlie, Age: 25' },
        { input: 'David 40', expectedOutput: 'Name: David, Age: 40' },
        { input: 'Eve 18', expectedOutput: 'Name: Eve, Age: 18' },
        { input: 'Frank 50', expectedOutput: 'Name: Frank, Age: 50' },
        { input: 'Grace 35', expectedOutput: 'Name: Grace, Age: 35' },
        { input: 'Heidi 22', expectedOutput: 'Name: Heidi, Age: 22' },
        { input: 'Ivan 28', expectedOutput: 'Name: Ivan, Age: 28' },
        { input: 'Judy 33', expectedOutput: 'Name: Judy, Age: 33' },
        { input: 'Kevin 45', expectedOutput: 'Name: Kevin, Age: 45' },
        { input: 'Lily 29', expectedOutput: 'Name: Lily, Age: 29' },
        { input: 'Mike 31', expectedOutput: 'Name: Mike, Age: 31' },
        { input: 'Nina 24', expectedOutput: 'Name: Nina, Age: 24' },
        { input: 'Oscar 27', expectedOutput: 'Name: Oscar, Age: 27' },
        { input: 'Paul 38', expectedOutput: 'Name: Paul, Age: 38' },
        { input: 'Queen 60', expectedOutput: 'Name: Queen, Age: 60' },
        { input: 'Rose 19', expectedOutput: 'Name: Rose, Age: 19' },
        { input: 'Steve 42', expectedOutput: 'Name: Steve, Age: 42' },
        { input: 'Tom 21', expectedOutput: 'Name: Tom, Age: 21' }
    ],
    110: [ // 生成器 yield
        { input: '5', expectedOutput: '0 1 4 9 16' },
        { input: '3', expectedOutput: '0 1 4' },
        { input: '1', expectedOutput: '0' },
        { input: '0', expectedOutput: '' }, // Empty
        { input: '10', expectedOutput: '0 1 4 9 16 25 36 49 64 81' },
        { input: '2', expectedOutput: '0 1' },
        { input: '4', expectedOutput: '0 1 4 9' },
        { input: '6', expectedOutput: '0 1 4 9 16 25' },
        { input: '7', expectedOutput: '0 1 4 9 16 25 36' },
        { input: '8', expectedOutput: '0 1 4 9 16 25 36 49' },
        { input: '9', expectedOutput: '0 1 4 9 16 25 36 49 64' },
        { input: '11', expectedOutput: '0 1 4 9 16 25 36 49 64 81 100' },
        { input: '12', expectedOutput: '0 1 4 9 16 25 36 49 64 81 100 121' },
        { input: '5', expectedOutput: '0 1 4 9 16' },
        { input: '3', expectedOutput: '0 1 4' },
        { input: '2', expectedOutput: '0 1' },
        { input: '1', expectedOutput: '0' },
        { input: '4', expectedOutput: '0 1 4 9' },
        { input: '6', expectedOutput: '0 1 4 9 16 25' },
        { input: '7', expectedOutput: '0 1 4 9 16 25 36' }
    ],
    111: [ // Map 函数
        { input: '1 2 3', expectedOutput: '2 4 6' },
        { input: '0 0 0', expectedOutput: '0 0 0' },
        { input: '-1 -2 -3', expectedOutput: '-2 -4 -6' },
        { input: '10 20 30', expectedOutput: '20 40 60' },
        { input: '5', expectedOutput: '10' }
    ],
    112: [ // Filter 函数
        { input: '1 2 3 4 5', expectedOutput: '2 4' },
        { input: '1 3 5', expectedOutput: '' },
        { input: '2 4 6', expectedOutput: '2 4 6' },
        { input: '0 1 2', expectedOutput: '0 2' },
        { input: '10 11 12', expectedOutput: '10 12' }
    ],
    113: [ // Zip 函数
        { input: '1 2 3\na b c', expectedOutput: "[(1, 'a'), (2, 'b'), (3, 'c')]" },
        { input: '1\na', expectedOutput: "[(1, 'a')]" },
        { input: '10 20\nx y', expectedOutput: "[(10, 'x'), (20, 'y')]" },
        { input: '0 0\n0 0', expectedOutput: "[(0, '0'), (0, '0')]" },
        { input: '5 5 5\nA B C', expectedOutput: "[(5, 'A'), (5, 'B'), (5, 'C')]" }
    ],
    114: [ // Enumerate 函数
        { input: 'apple banana', expectedOutput: 'Index: 0, Value: apple\nIndex: 1, Value: banana' },
        { input: 'a b c', expectedOutput: 'Index: 0, Value: a\nIndex: 1, Value: b\nIndex: 2, Value: c' },
        { input: 'one', expectedOutput: 'Index: 0, Value: one' },
        { input: 'x y z w', expectedOutput: 'Index: 0, Value: x\nIndex: 1, Value: y\nIndex: 2, Value: z\nIndex: 3, Value: w' },
        { input: 'hello world', expectedOutput: 'Index: 0, Value: hello\nIndex: 1, Value: world' }
    ],
    115: [ // Sorted 函数
        { input: 'apple fig banana', expectedOutput: 'fig apple banana' },
        { input: 'a bb ccc', expectedOutput: 'a bb ccc' },
        { input: 'ccc bb a', expectedOutput: 'a bb ccc' },
        { input: 'same same same', expectedOutput: 'same same same' },
        { input: 'long short mid', expectedOutput: 'mid long short' } // mid(3) long(4) short(5)
    ],
    116: [ // Any 和 All 函数
        { input: '1 5 12', expectedOutput: 'True\nTrue' },
        { input: '0 5 12', expectedOutput: 'False\nTrue' },
        { input: '0 0 0', expectedOutput: 'False\nFalse' },
        { input: '1 2 3', expectedOutput: 'True\nFalse' },
        { input: '11 12 13', expectedOutput: 'True\nTrue' }
    ],
    117: [ // Random 模块
        { input: '', expectedOutput: '82' }, // Seed 42 -> 82
        { input: 'any', expectedOutput: '82' },
        { input: '1', expectedOutput: '82' },
        { input: 'test', expectedOutput: '82' },
        { input: '0', expectedOutput: '82' }
    ],
    118: [ // Re 模块
        { input: 'test@example.com', expectedOutput: 'Valid' },
        { input: 'invalid-email', expectedOutput: 'Invalid' },
        { input: 'user@domain', expectedOutput: 'Invalid' }, // Missing .
        { input: '@domain.com', expectedOutput: 'Invalid' }, // Missing user
        { input: 'user.name@domain.co.uk', expectedOutput: 'Valid' }
    ],
    119: [ // Collections Counter
        { input: 'hello', expectedOutput: 'e: 1\nh: 1\nl: 2\no: 1' },
        { input: 'abc', expectedOutput: 'a: 1\nb: 1\nc: 1' },
        { input: 'aabbcc', expectedOutput: 'a: 2\nb: 2\nc: 2' },
        { input: 'aaa', expectedOutput: 'a: 3' },
        { input: 'banana', expectedOutput: 'a: 3\nb: 1\nn: 2' }
    ],
    121: [ // Itertools Product
        { input: '1 2\na b', expectedOutput: "[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]" },
        { input: '1\na', expectedOutput: "[(1, 'a')]" },
        { input: '1 2 3\nx', expectedOutput: "[(1, 'x'), (2, 'x'), (3, 'x')]" },
        { input: '0\n0 1', expectedOutput: "[(0, '0'), (0, '1')]" },
        { input: '5 6\nA B', expectedOutput: "[(5, 'A'), (5, 'B'), (6, 'A'), (6, 'B')]" }
    ],
    122: [ // Functools Reduce
        { input: '1 2 3 4', expectedOutput: '24' },
        { input: '5 5 5', expectedOutput: '125' },
        { input: '10 10', expectedOutput: '100' },
        { input: '1 2 3 4 5', expectedOutput: '120' },
        { input: '2 3', expectedOutput: '6' }
    ],
    123: [ // Try-Except
        { input: '10 2', expectedOutput: '5.0' },
        { input: '10 0', expectedOutput: 'Division by zero' },
        { input: '5 2', expectedOutput: '2.5' },
        { input: '0 5', expectedOutput: '0.0' },
        { input: '100 10', expectedOutput: '10.0' }
    ],
    124: [ // Decorator
        { input: 'hello', expectedOutput: 'HELLO' },
        { input: 'world', expectedOutput: 'WORLD' },
        { input: 'Python', expectedOutput: 'PYTHON' },
        { input: 'Decorator', expectedOutput: 'DECORATOR' },
        { input: 'test', expectedOutput: 'TEST' }
    ],
    125: [ // Closure
        { input: '3\n5', expectedOutput: '15' },
        { input: '2\n10', expectedOutput: '20' },
        { input: '10\n10', expectedOutput: '100' },
        { input: '5\n0', expectedOutput: '0' },
        { input: '0\n5', expectedOutput: '0' }
    ],
    126: [ // Set Operations
        { input: '1 2 3\n3 4 5', expectedOutput: '1 2 3 4 5\n3' },
        { input: '1 2\n1 2', expectedOutput: '1 2\n1 2' },
        { input: '1 2\n3 4', expectedOutput: '1 2 3 4\n' }, // Empty intersection -> empty line
        { input: '1 2 3\n2 3 4', expectedOutput: '1 2 3 4\n2 3' },
        { input: '5\n5', expectedOutput: '5\n5' }
    ],
    127: [ // String Module
        { input: '5', expectedOutput: 'abcde' },
        { input: '1', expectedOutput: 'a' },
        { input: '26', expectedOutput: 'abcdefghijklmnopqrstuvwxyz' },
        { input: '10', expectedOutput: 'abcdefghij' },
        { input: '3', expectedOutput: 'abc' }
    ],
    128: [ // Math GCD
        { input: '12 18', expectedOutput: '6' },
        { input: '10 5', expectedOutput: '5' },
        { input: '7 13', expectedOutput: '1' },
        { input: '100 10', expectedOutput: '10' },
        { input: '24 36', expectedOutput: '12' }
    ],
    129: [ // Statistics
        { input: '1 2 3 4 5', expectedOutput: '3.0\n3' },
        { input: '1 1 1', expectedOutput: '1.0\n1.0' }, // median of 1,1,1 is 1.0
        { input: '1 2 3 4', expectedOutput: '2.5\n2.5' },
        { input: '10 20 30', expectedOutput: '20.0\n20.0' },
        { input: '0 100', expectedOutput: '50.0\n50.0' }
    ],
    130: [ // Datetime Timedelta
        { input: '2023-01-01\n10', expectedOutput: '2023-01-11' },
        { input: '2023-01-01\n1', expectedOutput: '2023-01-02' },
        { input: '2023-01-01\n365', expectedOutput: '2024-01-01' },
        { input: '2023-12-31\n1', expectedOutput: '2024-01-01' },
        { input: '2023-02-28\n1', expectedOutput: '2023-03-01' }
    ]
};
