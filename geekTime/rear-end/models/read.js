const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/read');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			title: data.title,
			text: data.text,
			image: data.image,
			content: data.content,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }
}

module.exports = Model;