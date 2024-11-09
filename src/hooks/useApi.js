
import { useState, useEffect } from 'react';
import { fetchVillageActivities, fetchVillageNews, fetchVillageProfile} from '../helpers/service';

export const useVillageActivities = (page = 1, limit = 10) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const data = await fetchVillageActivities(page, limit);
                setActivities(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadActivities();
    }, [page, limit]);

    return { activities, loading, error };
};

export const useVillageNews = (page = 1, limit = 10) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchVillageNews(page, limit);
                setNews(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, [page, limit]);

    return { news, loading, error };
};

export const useVillageProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchVillageProfile();
                setProfile(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, []);

    return { profile, loading, error };
};