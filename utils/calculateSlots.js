exports.calculateSlots = (startTime, endTime, duration) => {
    const slots = [];
    const startDate = new Date(`2000-01-01 ${startTime}`);
    const endDate = new Date(`2000-01-01 ${endTime}`);
  
    while (startDate < endDate) {
      const slotStartTime = startDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      startDate.setMinutes(startDate.getMinutes() + duration);
      const slotEndTime = startDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
  
      slots.push(`${slotStartTime} - ${slotEndTime}`);
    }
  
    return slots;
  }
  