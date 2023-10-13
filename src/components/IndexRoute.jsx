function IndexRoute() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="p-5 text-center">
          <h1 className="mb-3">Welcome Space Explorer!🚀</h1>
          <h4 className="mb-3">Explore the universe's wonders.</h4>
          <p className="mb-4">
            View a random Mars Rover or NASA's Astronomy Picture of the Day
            (APOD).
          </p>
          <a className="btn btn-dark mx-2" href="/apod">
            Astro Picture of the Day
          </a>
          <a className="btn btn-secondary mx-2" href="/mars">
            Mars Rover Photo
          </a>
        </div>
      </div>
    </>
  );
}

export default IndexRoute;
