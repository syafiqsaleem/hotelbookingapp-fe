import axios from "axios";

export const createHotel = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-hotel`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// To display all hotels
export const allHotels = async () =>
  await axios.get(`${process.env.REACT_APP_API}/hotels`);

// Number of days the hotel will be available on the homepage
export const diffDays = (from, to) => {
  // day in milliseconds
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs((start - end) / day));
  return difference;
};

// To display all hotels posted by owner
export const sellerHotels = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/seller-hotels`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// delete hotel
export const deleteHotel = async (token, hotelId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-hotel/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// edit hotel
export const read = async (hotelId) =>
  await axios.get(`${process.env.REACT_APP_API}/hotel/${hotelId}`);

// update hotel
export const updateHotel = async (token, data, hotelId) =>
  await axios.put(
    `${process.env.REACT_APP_API}/update-hotel/${hotelId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

// hotel bookings
export const userHotelBookings = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user-hotel-bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Already booked hotel
export const isAlreadyBooked = async (token, hotelId) =>
  await axios.get(`${process.env.REACT_APP_API}/is-already-booked/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Search DB for searched parameters keyed in
export const searchListings = async (query) =>
  await axios.post(`${process.env.REACT_APP_API}/search-listings`, query);
