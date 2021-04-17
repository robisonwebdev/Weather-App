import locationData from "./storedLocationData";

function deleteStoredLocationData() {
    locationData.splice(0, locationData.length);
}

export default deleteStoredLocationData;