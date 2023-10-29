export const maxLengthNameChat = (name: string) => {
  if (name.length > 25) {
    return name.slice(0, 25) + "...";
  } else {
    return name;
  }
};

export const maxLengthNameLogins = (name: string) => {
  if (name.length > 100) {
    return name.slice(0, 100) + "...";
  } else {
    return name;
  }
};

export const maxLengthNameHeader = (name: string) => {
  if (name.length > 40) {
    return name.slice(0, 40) + "...";
  } else {
    return name;
  }
};

export const maxLengthNameMessage = (name: string) => {
  if (name.length > 150) {
    return name.slice(0, 150) + "...";
  } else {
    return name;
  }
};
