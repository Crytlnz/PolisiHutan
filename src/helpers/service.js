import API from './api';

// GUID Desa
const GUID = '2305e536-0ef6-48e7-9aac-79ca236433fa';

// Ambil data profile desa
export const fetchVillageProfile = async () => {
  try {
    const { data } = await API.get('/api/village/profile', {
      params: { guid: GUID },
    });
    return data;
  } catch (error) {
    console.error('Error fetching village profile:', error.message);
    throw new Error(`Failed to fetch village profile: ${error.message}`);
  }
};

// Ambil data berita desa
export const fetchVillageNews = async (page = 1, limit = 10) => {
  try {
    const { data } = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'news' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching village news:', error.message);
    throw new Error(`Failed to fetch village news: ${error.message}`);
  }
};

// Ambil data aktifitas desa
export const fetchVillageActivities = async (page = 1, limit = 10) => {
  try {
    const { data } = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'activity' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching village activities:', error.message);
    throw new Error(`Failed to fetch village activities: ${error.message}`);
  }
};

// Ambil data aset desa
export const fetchVillageAssets = async (page = 1, limit = 10) => {
  try {
    const { data } = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'asset' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching village assets:', error.message);
    throw new Error(`Failed to fetch village assets: ${error.message}`);
  }
};
