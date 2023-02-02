export interface Activity {
  presence?: string;
  status?: string | null;
}

export type SetActivity = (setActivity: Activity) => void;
