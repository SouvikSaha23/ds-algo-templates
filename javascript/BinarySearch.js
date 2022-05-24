/**
 * Finds an element in the range: [startOfRange, endOfRange] that evaluates to 0 (zero), using binary search.
 * @param startOfRange inclusive start of range
 * @param endOfRange inclusive end of range
 * @param evaluate function that checks intermediate values of binary search for: Negative (<0), zero (===0) or positive (>0).
 *                 Inference: Negative => target lies on right, Zero => target matched, Positive => target lies on left.
 * @param notFoundValue value to be returned if no element evaluates to zero.
 */
export const binarySearch = (startOfRange, endOfRange, evaluate, notFoundValue = -1) => {
    let lo = startOfRange, hi = endOfRange;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (evaluate(mid) === 0) {
            return mid;
        }
        if (evaluate(mid) < 0) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return notFoundValue;
};
/**
 * Returns first element in the range: [startOfRange, endOfRange] that evaluates to true,
 * where elements in range follows the pattern: [ ..., false, false, true, true, ...].
 * If the last element itself is false in the range, then it returns : endOfRange + 1.
 *
 * @param startOfRange inclusive start of range
 * @param endOfRange inclusive end of range
 * @param evaluate function that checks intermediate values of binary search for true or false.
 */
export const lowerBound = (startOfRange, endOfRange, evaluate) => {
    let lo = startOfRange, hi = endOfRange;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (evaluate(mid)) {
            hi = mid;
        }
        else {
            lo = mid + 1;
        }
    }
    return evaluate(lo) ? lo : endOfRange + 1;
};
/**
 * Returns last element in the range: [startOfRange, endOfRange] that evaluates to true,
 * where elements in range follows the pattern: [ ..., true, true, false, false, ...].
 * If the first element itself is false in the range, then it returns : startOfRange - 1.
 *
 * @param startOfRange inclusive start of range
 * @param endOfRange inclusive end of range
 * @param evaluate function that checks intermediate values of binary search for true or false.
 */
export const upperBound = (startOfRange, endOfRange, evaluate) => {
    const lowerBoundOfFalse = lowerBound(startOfRange, endOfRange, candidate => !evaluate(candidate));
    return lowerBoundOfFalse - 1;
};
