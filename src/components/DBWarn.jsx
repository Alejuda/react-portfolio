function DBWarn() {
  return (
    <div className="mt-auto text-yellow-400 p-3 border border-yellow-400 rounded-2xl warning">
      <h5 className="font-semibold text-sm">Warning!</h5>
      <p className="text-xs">
        This project utilizes a <strong className="font-extrabold underline">free hosting service</strong> for its database. The first
        time you visit this site, it may take a little longer to load as the
        database initializes. Subsequent visits will be faster. Thank you for
        your patience!
      </p>
    </div>
  );
}

export default DBWarn;
