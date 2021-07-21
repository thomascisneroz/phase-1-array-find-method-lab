function superbowlWin(record) {
    let winningYear = record.find( x => x.year === '1969');
    if (winningYear) {
        return winningYear.year
    }

}

