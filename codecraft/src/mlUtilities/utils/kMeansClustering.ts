const kMeans = (data: number[][], k: number, maxIterations: number): number[][] => {
    // Initialize centroids randomly from the dataset
    let centroids = initializeCentroids(data, k);
    let clusters: number[][][] = Array.from({ length: k }, () => []);

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        // Assign data points to the nearest centroid
        clusters = assignClusters(data, centroids);
        // Update centroids
        centroids = updateCentroids(clusters);
    }

    return centroids;
};

const initializeCentroids = (data: number[][], k: number): number[][] => {
    // Randomly pick k points as initial centroids
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, k);
};

const assignClusters = (data: number[][], centroids: number[][]): number[][][] => {
    const clusters: number[][][] = Array.from({ length: centroids.length }, () => []);
    data.forEach(point => {
        const closestCentroidIndex = centroids.reduce((closestIndex, centroid, index) => {
            const distance = euclideanDistance(point, centroid);
            return distance < euclideanDistance(point, centroids[closestIndex]) ? index : closestIndex;
        }, 0);
        clusters[closestCentroidIndex].push(point);
    });
    return clusters;
};

const updateCentroids = (clusters: number[][][]): number[][] => {
    return clusters.map(cluster => {
        if (cluster.length === 0) return []; // Handle empty clusters
        return cluster[0].map((_, index) => {
            return cluster.reduce((sum, point) => sum + point[index], 0) / cluster.length;
        });
    });
};

const euclideanDistance = (pointA: number[], pointB: number[]): number => {
    return Math.sqrt(pointA.reduce((sum, value, index) => sum + Math.pow(value - pointB[index], 2), 0));
};

export default kMeans;
