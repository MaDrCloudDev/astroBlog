const formatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "2-digit",
	year: "numeric",
});

export const formatDate = (date: Date): string => formatter.format(date);
