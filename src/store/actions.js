import wretch from 'wretch';

export const actions = {
	loadJobs({ commit }) {
		wretch('https://jobs.github.com/positions.json?location=remote')
			.get()
			.json(json => {
				let jobData = json;
				commit('SET_JOBS', jobData);
			})
			.catch(error => {
				console.log(error);
			});
	}
};
