export default (height) => {
    const heightArr = height.split(/'|"/).filter((x) => x);
    const sm = ((Number(heightArr[0]) * 0.3048 * 100) + (Number(heightArr[1]) * 2.54)).toFixed(0);
    return `${sm} см`    
}