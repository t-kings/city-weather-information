import {
  getCities,
  storeCities,
  storeFavoriteCities,
  findFavoriteCities,
  storeNotes,
  findNotes,
} from ".";

describe("Cities", () => {
  afterEach(() => {
    /**
     * remove local storage
     */
    localStorage.clear();
  });

  it("Should store cities to local storage", async () => {
    const res = await storeCities([
      {
        city: "Lagos",
      },
    ]);
    expect(localStorage.getItem("weather:information:cities")).toBeDefined();
    expect(res).toBeTruthy();
  });

  it("Should get cities from local storage", async () => {
    const cities = await getCities();
    expect(typeof cities).toBe("object");
    expect(cities.length).toBeDefined();
  });
});

describe("Favorite Cities", () => {
  afterEach(() => {
    /**
     * remove local storage
     */
    localStorage.clear();
  });

  it("Should store favorite cities to local storage", async () => {
    const res = await storeFavoriteCities([
      {
        city: "Lagos",
      },
    ]);
    expect(
      localStorage.getItem("weather:information:favorite-cities")
    ).toBeDefined();
    expect(res).toBeTruthy();
  });

  it("Should get favorite cities from local storage", async () => {
    const cities = await findFavoriteCities();
    expect(typeof cities).toBe("object");
  });
});

describe("Notes", () => {
  afterEach(() => {
    /**
     * remove local storage
     */
    localStorage.clear();
  });

  it("Should store notes to local storage", async () => {
    const res = await storeNotes([
      {
        note: "Lagos",
      },
    ]);
    expect(localStorage.getItem("weather:information:notes")).toBeDefined();

    expect(res).toBeTruthy();
  });

  it("Should get notes from local storage", async () => {
    const notes = await findNotes();
    expect(typeof notes).toBe("object");
    expect(notes.length).toBeDefined();
  });
});
