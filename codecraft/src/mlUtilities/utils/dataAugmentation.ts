const flipImage = (image: number[][]): number[][] => {
    return image.map(row => row.reverse());
};

export default flipImage;