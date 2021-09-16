function letterConverter(score){
    if (score < 50) {
        return 'Incomplete'
    } else if (score <= 52) { 
        return 'F-'
    } else if (score <= 57) { 
        return 'F'
    } else if (score <= 59) { 
        return 'F+'
    } else if (score <= 62) { 
        return 'D-'
    } else if (score <= 67) { 
        return 'D'
    } else if (score <= 69) { 
        return 'D+'
    } else if (score <= 72) { 
        return 'C-'
    } else if (score <= 77) { 
        return 'C'
    } else if (score <= 79) { 
        return 'C+'
    } else if (score <= 82) { 
        return 'B-'
    } else if (score <= 87) { 
        return 'B'
    } else if (score <= 89) { 
        return 'B+'
    } else if (score <= 92) { 
        return 'A-'
    } else if (score <= 97) { 
        return 'A'
    } else { 
        return 'A+'
    } 
}

export default letterConverter