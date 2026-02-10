// 2026-02-10 - 1h 10min
/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start

enum ProcessingStage {
	LeadingWhitespace,
	CheckSign,
	LeadingZeros,
	ReadingDigits,
	ProcessDigits,
}

enum StageEndBehavior {
	MovePointer,
	NextStage,
	MovePointerAndNextStage,
}

function myAtoi(string: string): number {
	let currentStage: ProcessingStage = ProcessingStage.LeadingWhitespace;
	let numberArray: number[] = [];
	let isNegativeSign: Boolean = false;
	let currentGlobalIndex: number = 0;

	while (true) {
		let endBehavior: StageEndBehavior | undefined;

		switch (currentStage) {
			case ProcessingStage.LeadingWhitespace:
				endBehavior = doStageLeadingWhitespace(
					currentGlobalIndex,
					string
				);
				break;
			case ProcessingStage.CheckSign:
				endBehavior = doStageCheckSign(currentGlobalIndex, string);
				break;
			case ProcessingStage.LeadingZeros:
				endBehavior = doStageLeadingZeros(currentGlobalIndex, string);
				break;
			case ProcessingStage.ReadingDigits:
				endBehavior = doStageReadingDigits(currentGlobalIndex, string);
				break;
			case ProcessingStage.ProcessDigits:
				return doStageProcessDigits();
		}

		switch (endBehavior) {
			case StageEndBehavior.MovePointer:
				currentGlobalIndex++;
				break;
			case StageEndBehavior.MovePointerAndNextStage:
				currentGlobalIndex++;
				currentStage++;
				break;
			case StageEndBehavior.NextStage:
				currentStage++;
				break;
		}
	}

	function doStageLeadingWhitespace(
		currentIndex: Number,
		string: String
	): StageEndBehavior {
		if (string[currentIndex as any] == " ")
			return StageEndBehavior.MovePointer;

		return StageEndBehavior.NextStage;
	}

	function doStageCheckSign(
		currentIndex: Number,
		string: String
	): StageEndBehavior {
		switch (string[currentIndex as any]) {
			case "+":
				return StageEndBehavior.MovePointerAndNextStage;
			case "-":
				isNegativeSign = true;
				return StageEndBehavior.MovePointerAndNextStage;
			default:
				return StageEndBehavior.NextStage;
		}
	}

	function doStageLeadingZeros(
		currentIndex: Number,
		string: String
	): StageEndBehavior {
		switch (string[currentIndex as any]) {
			case "0":
				return StageEndBehavior.MovePointer;
			default:
				return StageEndBehavior.NextStage;
		}
	}

	function doStageReadingDigits(
		currentIndex: Number,
		string: String
	): StageEndBehavior {
		let currentCharacter = string[currentIndex as any];
		if (
			!isNaN(currentCharacter as any) &&
			currentCharacter != " " &&
			currentCharacter != undefined
		) {
			numberArray.push(currentCharacter as any as number);
			return StageEndBehavior.MovePointer;
		} else {
			return StageEndBehavior.NextStage;
		}
	}

	function doStageProcessDigits(): number {
		let returnNumber = 0;
		let currentMagnitude = 0;

		for (let num of [...numberArray].reverse()) {
			returnNumber += num * 10 ** currentMagnitude;
			currentMagnitude++;
		}

		if (isNegativeSign) {
			returnNumber = Math.min(returnNumber, 2147483648);
		} else {
			returnNumber = Math.min(returnNumber, 2147483647);
		}

		return returnNumber * (isNegativeSign ? -1 : 1);
	}
}

// @lc code=end
