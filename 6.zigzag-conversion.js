// 2026-02-02 - 1h

/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} letters
 * @param {number} numRows
 * @return {string}
 */
var convert = function (letters, numRows) {
	const arrayLengthX = calculateMaxX(letters, numRows);
	const arrayLengthY = numRows;
	const array = [];

	for (let iX = 0; iX < arrayLengthX; iX++) {
		array.push([]);
		for (let iY = 0; iY < arrayLengthY; iY++) {
			array[iX].push(null);
		}
	}

	let goingDown = true;

	let arrayWriteX = 0;
	let arrayWriteY = 0;
	let arrayWriteLetterIndex = 0;
	while (hasLettersLeftToPlace()) {
		switch (goingDown) {
			case true:
				if (arrayWriteY < arrayLengthY - 1) {
					placeLetter(arrayWriteX, arrayWriteY);
					arrayWriteY++;
				} else {
					placeLetter(arrayWriteX, arrayWriteY);
					arrayWriteX++;

					if (arrayLengthY > 1) {
						goingDown = false;
						arrayWriteY--;
					}
				}
				break;
			case false:
				if (arrayWriteY > 0) {
					placeLetter(arrayWriteX, arrayWriteY);
					arrayWriteX++;

					if (arrayLengthY > 1) {
						goingDown = false;
						arrayWriteY--;
					}
				} else {
					goingDown = true;
					placeLetter(arrayWriteX, arrayWriteY);
					arrayWriteY++;
				}
				break;
		}
	}

	let arrayReadX = 0;
	let arrayReadY = 0;

	let stringToReturn = "";

	while (arrayReadY < arrayLengthY) {
		if (arrayReadX < arrayLengthX) {
			let value = array[arrayReadX][arrayReadY];
			stringToReturn += value || "";
			arrayReadX++;
		} else {
			arrayReadX = 0;
			arrayReadY++;
		}
	}

	return stringToReturn;

	function placeLetter(letterX, letterY) {
		const letterToPlace = letters[arrayWriteLetterIndex++];

		array[letterX][letterY] = letterToPlace;
	}

	function hasLettersLeftToPlace() {
		return arrayWriteLetterIndex < letters.length;
	}
};

function calculateMaxX(letters, numRows) {
	let mainColumnLength = numRows;
	let connectingColumnWidth = Math.max(numRows - 2, 0);

	let numberOfColumns = 0;
	let lettersLeft = letters.length;

	let comparingMainColumn = true;
	while (true) {
		if (lettersLeft <= 0) break;

		switch (comparingMainColumn) {
			case true:
				lettersLeft -= mainColumnLength;
				numberOfColumns++;
				break;
			case false:
				numberOfColumns += Math.min(lettersLeft, connectingColumnWidth);
				lettersLeft -= Math.min(lettersLeft, connectingColumnWidth);
				break;
		}

		comparingMainColumn = !comparingMainColumn;
	}

	return numberOfColumns;
}

// "PAYPALISHIRING"\n4

// @lc code=end
