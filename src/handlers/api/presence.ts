import { Activity, SetActivity } from "@/types/interfaces/Activity";

export const getPresence = (setActivity: SetActivity) => {
  fetch("https://api.lanyard.rest/v1/users/683879319558291539")
    .then((res) => res.json())
    .then((data) => {
      const presence = data.data.discord_status;
      const activites = data.data.activities;

      const activityStatus = activites.find(
        (newActivity: any) => newActivity.type === 4
      )?.state;

      return setActivity({ presence, status: activityStatus });
    });
};
