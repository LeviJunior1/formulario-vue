<template>
  <b-container>
    <b-table
        striped
        hover
        :items="contacts"
        :fields="fields"
        show-empty
    >
        <template #empty="scope">
            Nenhum Contato Até o Momento...
        </template>
        <template #cell(actions)="row">
            <b-button size="sm" variant="info" @click="showModal(row.item.message)" class="mr-1">
                Mensagem
            </b-button>
            <b-button size="sm" variant="outline-danger" @click="removeInfo(row.item.email)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            </b-button>
        </template>
    </b-table>
    <b-button
        v-if="contacts && contacts.length > 0"
        block
        variant="danger"
        class="font-weight-bold"
        @click="deleteAllInfo()"
    >
        Apagar Tudo
    </b-button>
    <b-modal id="modal-message" hide-footer title="Mensagem do Cliente">
      <p class="text-break">
        {{ message }}
      </p>
    </b-modal>
  </b-container>
</template>

<script>
import { deleteInfo, deleteAll } from '@/utils/sessionStorage'
import toast from '@/mixins/toast'

export default {
    name: 'ListContact',
    props: {
        contacts: {
            type: Array,
            default: () => []
        }
    },
    mixins: [toast],
    data: () => ({
        fields: [
            {
                key: 'name',
                label: 'Nome',
                sortable: true
            },
            {
                key: 'email',
                label: 'E-mail'
            },
            { key: 'actions', label: 'Ações' }
        ],
        message: null
    }),
    methods: {
        showModal(msg) {
            this.message = msg
            this.$root.$emit('bv::show::modal', 'modal-message')
        },
        removeInfo(email) {
            deleteInfo(email)
            this.$emit('getInfo')
            this.showToast('success', "Consegui...", "Removi o item para você <3", 'b-toaster-bottom-left', true)
        },
        deleteAllInfo() {
            deleteAll()
            this.$emit('getInfo')
            this.showToast('success', "Oh My Gosh...", "Removi Tudo HAHAHA", 'b-toaster-bottom-left', true)
        }
    }
}
</script>
