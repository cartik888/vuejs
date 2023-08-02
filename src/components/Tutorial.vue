<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Records</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>
    <a href="#" title="Edit Record" @click="updateTutorial"><box-icon name='edit' color="#46cc25"></box-icon></a>
    <a href="#" title="Delete  Record"   @click="deleteTutorial"><box-icon name='trash' color="#cc2538"></box-icon></a>
    <a href="#" title="Push   Record" v-if="currentTutorial.published"      @click="updatePublished(false)"><box-icon name='UnPublish' color="#2596be"></box-icon></a>
    <a href="#" v-else      @click="updatePublished(true)"><box-icon name='book-open' color="#cc2538"></box-icon></a>
   
   

    

   
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Records...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import 'boxicons';

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    Toggle: function() {
      this.addNew = !this.addNew;
    },
    addItem: function(item) {
      if (!item) {
        return;
      }
      this.items.push(item);

      this.newItem = {};
      this.addNew = !this.addNew;
    },

    updateItem: function(item, index) {
      this.items.splice(index, 1, item);
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    },

    cancel: function() {
      this.newItem = {};
      this.addNew = !this.addNew;
    }
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial };
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
