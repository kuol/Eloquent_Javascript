# 1) start from 1
# 2) can either +5 or *3
# 3) Given a target, find the path to get there from 1 via Rule 2)
def main():
    target = 24 
    history = []
    if getHistory(target,history):
        print(''.join(history))
    else:
        print("There is no path to get to %d" %target)


def getHistory(target, history):
    if target == 1:
        history.append('1')
        return True
    elif target < 1:
        return False
    else:
        if not (target % 3):
            if getHistory(target/3, history):
                history.insert(0,'(')
                history.extend([')', '*', '3'])
                return True
        if getHistory(target-5, history):
            history.insert(0,'(')
            history.extend([')', '+', '5'])
            return True

if __name__ == '__main__':
    main()




