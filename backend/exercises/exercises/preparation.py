from random import randint, shuffle

def generate_times_table_question():
    factor1 = randint(1, 12)
    factor2 = randint(1, 12)

    correct_answer = factor1 * factor2


    options = [correct_answer]
    while len(options) < 4:
        option = correct_answer + randint(-4, 4)
        if option not in options and option > 0:  
            options.append(option)

    shuffle(options)

    
    return {
        "factor1": factor1,
        "factor2": factor2,
        "options": options
    }

# Test
if __name__ == "__main__":
    print(generate_times_table_question())
