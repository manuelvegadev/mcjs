export class PaperApi {
  #URL_BASE = 'https://api.papermc.io/v2';

  async #getPaperProject() {
    const response = await fetch(this.#URL_BASE + '/projects/paper');
    return await response.json();
  }

  async getVersionGroups() {
    const paperProject = await this.#getPaperProject();

    return paperProject['version_groups'];
  }

  async getVersions() {
    const paperProject = await this.#getPaperProject();
    return paperProject['versions'];
  }

  async getVersionBuilds(version) {
    let response = await fetch(
      this.#URL_BASE + 'projects/paper/versions/' + version
    );
    response = await response.json();

    return response['builds'];
  }
}

export default PaperApi;
